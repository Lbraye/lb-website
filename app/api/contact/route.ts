import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

export const runtime = 'nodejs';

const ContactSchema = z.object({
	name: z.string().trim().min(1, 'Name is required.').max(100, 'Name is too long.'),
	email: z.string().trim().toLowerCase().email('Valid email required.').max(254),
	message: z
		.string()
		.trim()
		.min(10, 'Message must be at least 10 characters.')
		.max(5000, 'Message is too long.'),
	// Honeypot — real users leave blank; bots typically fill anything.
	company: z.string().max(0).optional(),
});

// Per-instance in-memory rate limiter.
// Fluid Compute reuses instances across requests, so this gives reasonable
// portfolio-scale protection. Limits reset on cold start — not a hard bound.
// Swap for Upstash Redis via Marketplace when multi-instance guarantees matter.
const LIMIT = 5;
const WINDOW_MS = 10 * 60 * 1000;
const buckets = new Map<string, { count: number; resetAt: number }>();

function getClientIp(req: NextRequest): string {
	const fwd = req.headers.get('x-forwarded-for');
	if (fwd) return fwd.split(',')[0]!.trim();
	const real = req.headers.get('x-real-ip');
	if (real) return real.trim();
	return 'unknown';
}

function rateLimit(ip: string): { ok: boolean; retryAfter?: number } {
	const now = Date.now();
	const bucket = buckets.get(ip);

	if (!bucket || bucket.resetAt < now) {
		buckets.set(ip, { count: 1, resetAt: now + WINDOW_MS });
		return { ok: true };
	}
	if (bucket.count >= LIMIT) {
		return { ok: false, retryAfter: Math.ceil((bucket.resetAt - now) / 1000) };
	}
	bucket.count += 1;
	return { ok: true };
}

let calls = 0;
function maybeCleanup() {
	calls += 1;
	if (calls % 1000 !== 0) return;
	const now = Date.now();
	for (const [ip, b] of buckets) if (b.resetAt < now) buckets.delete(ip);
}

// TODO: swap onboarding@resend.dev for a verified domain address (e.g.
// contact@landonbraye.com) once the domain is verified in Resend. Shared
// sandbox domain hurts deliverability.
const FROM_ADDRESS = process.env.CONTACT_FROM_ADDRESS ?? 'Portfolio Contact <onboarding@resend.dev>';
const TO_ADDRESS = process.env.CONTACT_TO_ADDRESS ?? 'braye.landon@gmail.com';

export async function POST(req: NextRequest) {
	if (!process.env.RESEND_API_KEY) {
		console.error('[contact] RESEND_API_KEY is not set');
		return NextResponse.json(
			{ error: 'Contact is temporarily unavailable. Please email directly.' },
			{ status: 503 },
		);
	}

	const ip = getClientIp(req);
	const rl = rateLimit(ip);
	maybeCleanup();
	if (!rl.ok) {
		return NextResponse.json(
			{ error: 'Too many messages. Try again later.' },
			{ status: 429, headers: { 'Retry-After': String(rl.retryAfter ?? 600) } },
		);
	}

	let raw: unknown;
	try {
		raw = await req.json();
	} catch {
		return NextResponse.json({ error: 'Invalid request.' }, { status: 400 });
	}

	const parsed = ContactSchema.safeParse(raw);
	if (!parsed.success) {
		const first = parsed.error.issues[0];
		return NextResponse.json({ error: first?.message ?? 'Invalid input.' }, { status: 400 });
	}

	const { name, email, message, company } = parsed.data;

	// Honeypot trip — silently succeed so bots don't retry.
	if (company && company.length > 0) {
		return NextResponse.json({ success: true });
	}

	const resend = new Resend(process.env.RESEND_API_KEY);

	const { error } = await resend.emails.send({
		from: FROM_ADDRESS,
		to: TO_ADDRESS,
		replyTo: email,
		subject: `Portfolio message from ${name}`,
		text: `Name: ${name}\nEmail: ${email}\nIP: ${ip}\n\n${message}`,
	});

	if (error) {
		console.error('[contact] Resend error:', error);
		return NextResponse.json({ error: 'Failed to send message.' }, { status: 502 });
	}

	return NextResponse.json({ success: true });
}
