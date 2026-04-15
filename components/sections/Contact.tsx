'use client';

import { useState } from 'react';

const SOCIALS: { label: string; href: string; newTab?: boolean }[] = [
	{ label: 'LinkedIn', href: 'https://www.linkedin.com/in/landonbraye/', newTab: true },
	{ label: 'GitHub', href: 'https://github.com/Lbraye', newTab: true },
	{ label: 'Email — braye.landon@gmail.com', href: 'mailto:braye.landon@gmail.com' },
	{ label: 'Phone — 404-933-4391', href: 'tel:4049334391' },
	{ label: 'Location — Tampa, FL', href: '#' },
];

export function Contact() {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');
	const [company, setCompany] = useState(''); // honeypot
	const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
	const [errorMsg, setErrorMsg] = useState('');

	async function handleSubmit(e: React.FormEvent) {
		e.preventDefault();
		setStatus('sending');
		setErrorMsg('');

		try {
			const res = await fetch('/api/contact', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ name, email, message, company }),
			});

			if (res.ok) {
				setStatus('success');
				setName('');
				setEmail('');
				setMessage('');
				setCompany('');
			} else {
				const data = (await res.json().catch(() => ({}))) as { error?: string };
				setStatus('error');
				setErrorMsg(data.error ?? 'Something went wrong. Try again later.');
			}
		} catch {
			setStatus('error');
			setErrorMsg('Network error. Try emailing directly.');
		}
	}

	return (
		<section
			id='contact'
			className='section-pad mg-section'
		>
			{/* Section header */}
			<div className='mg-section-hdr' style={{ marginBottom: '3rem' }}>
				<span className='mg-section-hdr-label'>04 — Contact</span>
				<div className='mg-section-hdr-rule' aria-hidden />
			</div>

			<h2 className='mg-section-title-cinzel' style={{ marginBottom: '3.5rem' }}>
				Open a <span style={{ color: 'var(--sakura)' }}>Channel</span>
			</h2>

			<div className='duo-grid'>
				{/* Left — info + social links */}
				<div>
					<p
						style={{
							fontSize: '1rem',
							lineHeight: 2,
							fontWeight: 300,
							color: 'rgba(255,255,255,0.5)',
							marginBottom: '2rem',
						}}
					>
						Available for security engineering roles, consulting engagements, and compliance projects. Veteran with
						active Secret Clearance. Based in Tampa, FL — open to remote and on-site opportunities.
					</p>
					<div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
						{SOCIALS.map((s) => (
							<a
								key={s.label}
								href={s.href}
								target={s.newTab ? '_blank' : undefined}
								rel={s.newTab ? 'noopener noreferrer' : undefined}
								className='mg-social'
							>
								<span>{s.label}</span>
								<span className='mg-social-arrow' aria-hidden>
									→
								</span>
							</a>
						))}
					</div>
				</div>

				{/* Right — contact form */}
				<form
					onSubmit={handleSubmit}
					style={{ display: 'flex', flexDirection: 'column', gap: '1rem', position: 'relative' }}
					noValidate
				>
					{/* Honeypot — hidden from real users, bots fill it */}
					<div className='mg-honeypot' aria-hidden>
						<label htmlFor='company'>Company (leave blank)</label>
						<input
							id='company'
							name='company'
							type='text'
							tabIndex={-1}
							autoComplete='off'
							value={company}
							onChange={(e) => setCompany(e.target.value)}
						/>
					</div>

					<div className='mg-field'>
						<label htmlFor='contact-name' className='mg-input-label'>
							Name
						</label>
						<input
							id='contact-name'
							name='name'
							type='text'
							autoComplete='name'
							placeholder='Your name'
							value={name}
							onChange={(e) => setName(e.target.value)}
							required
							maxLength={100}
							className='mg-input'
						/>
					</div>

					<div className='mg-field'>
						<label htmlFor='contact-email' className='mg-input-label'>
							Email
						</label>
						<input
							id='contact-email'
							name='email'
							type='email'
							autoComplete='email'
							placeholder='your@email.com'
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							required
							maxLength={254}
							className='mg-input'
						/>
					</div>

					<div className='mg-field'>
						<label htmlFor='contact-message' className='mg-input-label'>
							Message
						</label>
						<textarea
							id='contact-message'
							name='message'
							placeholder='Describe your engagement...'
							rows={5}
							value={message}
							onChange={(e) => setMessage(e.target.value)}
							required
							minLength={10}
							maxLength={5000}
							className='mg-input'
							style={{ resize: 'none' }}
						/>
					</div>

					{status === 'success' && (
						<p
							style={{
								fontSize: '0.8rem',
								letterSpacing: '0.15em',
								color: 'var(--cyan)',
								textTransform: 'uppercase',
							}}
							role='status'
						>
							✓ Message sent — I&apos;ll be in touch.
						</p>
					)}
					{status === 'error' && (
						<p
							style={{
								fontSize: '0.8rem',
								letterSpacing: '0.15em',
								color: 'var(--sakura)',
								textTransform: 'uppercase',
							}}
							role='alert'
						>
							✕ {errorMsg || 'Failed to send — try emailing directly.'}
						</p>
					)}

					<button
						type='submit'
						disabled={status === 'sending'}
						className='mg-btn mg-btn-primary'
						style={{ alignSelf: 'flex-start', marginTop: '0.5rem' }}
					>
						<span className='shimmer' aria-hidden />
						{status === 'sending' ? 'Sending...' : 'Send Message'}
					</button>
				</form>
			</div>
		</section>
	);
}
