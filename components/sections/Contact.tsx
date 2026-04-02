'use client';

import { useState } from 'react';

const SOCIALS: { label: string; href: string; newTab?: boolean }[] = [
	{ label: 'LinkedIn', href: 'https://www.linkedin.com/in/landonbraye/', newTab: true },
	{ label: 'GitHub', href: 'https://github.com/Lbraye', newTab: true },
	{ label: 'Email — braye.landon@gmail.com', href: 'mailto:braye.landon@gmail.com' },
	{ label: 'Phone — 404-933-4391', href: 'tel:4049334391' },
	{ label: 'Location — Tampa, FL', href: '#' },
];

const inputStyle = {
	background: 'rgba(255,255,255,0.04)',
	border: '1px solid rgba(255,255,255,0.08)',
	padding: '0.85rem 1.1rem',
	color: 'var(--text)',
	fontFamily: 'var(--font-raleway)',
	fontSize: '0.9rem',
	fontWeight: 300,
	outline: 'none',
	transition: 'border-color 0.2s',
	width: '100%',
} as const;

export function Contact() {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');
	const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

	async function handleSubmit(e: React.FormEvent) {
		e.preventDefault();
		setStatus('sending');

		const res = await fetch('/api/contact', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ name, email, message }),
		});

		if (res.ok) {
			setStatus('success');
			setName('');
			setEmail('');
			setMessage('');
		} else {
			setStatus('error');
		}
	}

	return (
		<section
			id='contact'
			className='section-pad'
			style={{
				borderBottom: '1px solid rgba(212,43,43,0.18)',
				position: 'relative',
				zIndex: 10,
			}}
		>
			{/* Section header */}
			<div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '3rem' }}>
				<span style={{ fontFamily: 'var(--font-cinzel)', fontSize: '0.7rem', letterSpacing: '0.45em', color: 'var(--sakura)', textTransform: 'uppercase', whiteSpace: 'nowrap' }}>04 — Contact</span>
				<div style={{ flex: 1, height: 1, background: 'linear-gradient(90deg, rgba(212,43,43,0.25), transparent)' }} />
			</div>
			<h2 style={{ fontFamily: 'var(--font-cinzel)', fontSize: 'clamp(1.8rem,3.5vw,3rem)', fontWeight: 600, letterSpacing: '0.05em', marginBottom: '3.5rem' }}>
				Open a <span style={{ color: 'var(--sakura)' }}>Channel</span>
			</h2>

			<div className='duo-grid'>
				{/* Left — info + social links */}
				<div>
					<p style={{ fontSize: '1rem', lineHeight: 2, fontWeight: 300, color: 'rgba(255,255,255,0.5)', marginBottom: '2rem' }}>
						Available for security engineering roles, consulting engagements, and compliance projects. Veteran with active Secret Clearance. Based in Tampa, FL — open to remote and on-site opportunities.
					</p>
					<div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
						{SOCIALS.map(s => (
							<a
								key={s.label}
								href={s.href}
								target={s.newTab ? '_blank' : undefined}
								rel={s.newTab ? 'noopener noreferrer' : undefined}
								style={{
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'space-between',
									padding: '0.9rem 1.4rem',
									background: 'rgba(255,255,255,0.03)',
									border: '1px solid rgba(255,255,255,0.07)',
									textDecoration: 'none',
									color: 'var(--muted)',
									fontSize: '0.78rem',
									letterSpacing: '0.22em',
									textTransform: 'uppercase',
									fontWeight: 500,
									transition: 'all 0.25s',
								}}
								onMouseEnter={e => {
									e.currentTarget.style.borderColor = 'rgba(212,43,43,0.4)';
									e.currentTarget.style.color = 'var(--text)';
									e.currentTarget.style.paddingRight = '2rem';
								}}
								onMouseLeave={e => {
									e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)';
									e.currentTarget.style.color = 'var(--muted)';
									e.currentTarget.style.paddingRight = '1.4rem';
								}}
							>
								{s.label}
								<span style={{ color: 'var(--sakura)', fontSize: '1rem' }}>→</span>
							</a>
						))}
					</div>
				</div>

				{/* Right — contact form */}
				<form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
					<div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
						<label style={{ fontSize: '0.66rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--muted)' }}>Name</label>
						<input
							type='text'
							placeholder='Your name'
							value={name}
							onChange={e => setName(e.target.value)}
							required
							style={inputStyle}
							onFocus={e => (e.currentTarget.style.borderColor = 'rgba(212,43,43,0.45)')}
							onBlur={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)')}
						/>
					</div>

					<div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
						<label style={{ fontSize: '0.66rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--muted)' }}>Email</label>
						<input
							type='email'
							placeholder='your@email.com'
							value={email}
							onChange={e => setEmail(e.target.value)}
							required
							style={inputStyle}
							onFocus={e => (e.currentTarget.style.borderColor = 'rgba(212,43,43,0.45)')}
							onBlur={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)')}
						/>
					</div>

					<div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
						<label style={{ fontSize: '0.66rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--muted)' }}>Message</label>
						<textarea
							placeholder='Describe your engagement...'
							rows={5}
							value={message}
							onChange={e => setMessage(e.target.value)}
							required
							style={{ ...inputStyle, resize: 'none' }}
							onFocus={e => (e.currentTarget.style.borderColor = 'rgba(212,43,43,0.45)')}
							onBlur={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)')}
						/>
					</div>

					{status === 'success' && (
						<p style={{ fontSize: '0.8rem', letterSpacing: '0.15em', color: 'var(--cyan)', textTransform: 'uppercase' }}>
							✓ Message sent — I&apos;ll be in touch.
						</p>
					)}
					{status === 'error' && (
						<p style={{ fontSize: '0.8rem', letterSpacing: '0.15em', color: 'var(--sakura)', textTransform: 'uppercase' }}>
							✕ Failed to send — try emailing directly.
						</p>
					)}

					<button
						type='submit'
						disabled={status === 'sending'}
						style={{
							fontFamily: 'var(--font-bangers)',
							fontSize: '1.05rem',
							letterSpacing: '0.22em',
							textTransform: 'uppercase',
							padding: '0.85rem 2.2rem',
							background: status === 'sending' ? 'rgba(212,43,43,0.4)' : 'linear-gradient(135deg, var(--sakura), #8b0000)',
							color: 'white',
							border: 'none',
							cursor: status === 'sending' ? 'not-allowed' : 'pointer',
							alignSelf: 'flex-start',
							transition: 'box-shadow 0.3s',
						}}
						onMouseEnter={e => { if (status !== 'sending') e.currentTarget.style.boxShadow = '0 0 40px rgba(212,43,43,0.4)'; }}
						onMouseLeave={e => { e.currentTarget.style.boxShadow = 'none'; }}
					>
						{status === 'sending' ? 'Sending...' : 'Send Message'}
					</button>
				</form>
			</div>
		</section>
	);
}
