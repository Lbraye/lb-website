'use client';

import { useEffect, useState } from 'react';

const NAV_LINKS = [
	{ href: '#about', label: 'About', kanji: '者' },
	{ href: '#services', label: 'Services', kanji: '務' },
	{ href: '#projects', label: 'Projects', kanji: '作' },
	{ href: '#experience', label: 'Experience', kanji: '歴' },
	{ href: '#contact', label: 'Contact', kanji: '連' },
];

export function Navbar() {
	const [scrolled, setScrolled] = useState(false);
	const [open, setOpen] = useState(false);

	useEffect(() => {
		const handler = () => setScrolled(window.scrollY > 40);
		window.addEventListener('scroll', handler);
		return () => window.removeEventListener('scroll', handler);
	}, []);

	useEffect(() => {
		document.body.style.overflow = open ? 'hidden' : '';
		return () => { document.body.style.overflow = ''; };
	}, [open]);

	return (
		<>
			{/* Staggered animation style injected once */}
			<style>{`
				@keyframes link-in {
					from { opacity: 0; transform: translateX(-24px); }
					to   { opacity: 1; transform: translateX(0); }
				}
				.mobile-link {
					opacity: 0;
					animation: link-in 0.35s cubic-bezier(.22,1,.36,1) forwards;
				}
				.mobile-link:hover .mobile-link-label { color: var(--sakura) !important; }
				.mobile-link:hover .mobile-link-kanji { opacity: 0.25 !important; }
			`}</style>

			<nav className='nav-inner' style={{
				position: 'fixed',
				top: 0, left: 0, right: 0,
				zIndex: 1000,
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'space-between',
				background: 'rgba(8,8,16,0.72)',
				backdropFilter: 'blur(22px)',
				WebkitBackdropFilter: 'blur(22px)',
				borderBottom: '1px solid rgba(212,43,43,0.18)',
				transition: 'box-shadow 0.3s',
				boxShadow: scrolled ? '0 4px 40px rgba(0,0,0,0.6)' : 'none',
			}}>
				{/* Logo */}
				<a href='#' style={{ textDecoration: 'none', display: 'flex', alignItems: 'baseline', gap: '0.5rem', flexShrink: 0 }}>
					<span style={{ fontFamily: 'var(--font-bangers)', fontSize: 'clamp(1.1rem,4vw,1.45rem)', letterSpacing: '0.1em', color: 'var(--text)' }}>
						LANDON<span style={{ color: 'var(--sakura)' }}>/</span>BRAYE
					</span>
					<span style={{ fontSize: '0.85rem', color: '#d42b2b', fontWeight: 300, letterSpacing: '0.1em' }}>夜桜</span>
				</a>

				{/* Desktop links */}
				<ul className='nav-links'>
					{NAV_LINKS.map(({ href, label }) => (
						<li key={href}>
							<a
								href={href}
								style={{ color: 'var(--muted)', textDecoration: 'none', fontSize: '0.75rem', letterSpacing: '0.28em', textTransform: 'uppercase', fontWeight: 500, transition: 'color 0.25s' }}
								onMouseEnter={e => (e.currentTarget.style.color = 'var(--text)')}
								onMouseLeave={e => (e.currentTarget.style.color = 'var(--muted)')}
							>{label}</a>
						</li>
					))}
				</ul>

				{/* Desktop status pill */}
				<div className='nav-status' style={{ fontSize: '0.72rem', letterSpacing: '0.18em', color: 'var(--muted)', textTransform: 'uppercase' }}>
					<span style={{ position: 'relative', width: 8, height: 8, borderRadius: '50%', background: 'var(--sakura)', display: 'inline-block', marginRight: '0.5rem' }}>
						<span style={{ position: 'absolute', inset: -4, borderRadius: '50%', background: 'var(--sakura-dim)', animation: 'pulse-ring 2s ease-out infinite' }} />
					</span>
					Available
				</div>

				{/* Hamburger button */}
				<button
					className='nav-hamburger'
					onClick={() => setOpen(o => !o)}
					aria-label={open ? 'Close menu' : 'Open menu'}
					style={{ flexDirection: 'column', gap: '5px', zIndex: 1100, position: 'relative' }}
				>
					{[0, 1, 2].map(i => (
						<span key={i} style={{
							display: 'block',
							width: i === 1 ? (open ? 24 : 16) : 24,
							height: 2,
							background: open && i === 1 ? 'transparent' : 'var(--sakura)',
							borderRadius: 1,
							transition: 'all 0.3s cubic-bezier(.22,1,.36,1)',
							transform: open
								? i === 0 ? 'translateY(7px) rotate(45deg)'
									: i === 2 ? 'translateY(-7px) rotate(-45deg)' : 'none'
								: 'none',
							transformOrigin: 'center',
						}} />
					))}
				</button>
			</nav>

			{/* Mobile overlay */}
			{open && (
				<div
					style={{
						position: 'fixed', inset: 0, zIndex: 998,
						background: 'rgba(6,6,14,0.98)',
						backdropFilter: 'blur(24px)',
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'center',
						alignItems: 'flex-start',
						padding: '0 2.5rem',
						overflow: 'hidden',
					}}
				>
					{/* Ghost kanji watermark */}
					<span style={{
						position: 'absolute', bottom: '-2rem', right: '-1rem',
						fontFamily: 'var(--font-bangers)',
						fontSize: '40vw',
						color: 'rgba(212,43,43,0.04)',
						lineHeight: 1,
						userSelect: 'none',
						pointerEvents: 'none',
					}}>選</span>

					{/* Horizontal rule */}
					<div style={{ width: '2rem', height: 2, background: 'var(--sakura)', marginBottom: '2.5rem' }} />

					{/* Nav items */}
					{NAV_LINKS.map(({ href, label, kanji }, i) => (
						<a
							key={href}
							href={href}
							onClick={() => setOpen(false)}
							className='mobile-link'
							style={{
								animationDelay: `${i * 0.06 + 0.05}s`,
								textDecoration: 'none',
								display: 'flex',
								alignItems: 'baseline',
								gap: '1rem',
								marginBottom: i < NAV_LINKS.length - 1 ? '0.25rem' : 0,
								padding: '0.6rem 0',
								borderBottom: '1px solid rgba(255,255,255,0.04)',
								width: '100%',
							}}
						>
							<span
								className='mobile-link-kanji'
								style={{
									fontFamily: 'var(--font-bangers)',
									fontSize: '1.2rem',
									color: 'var(--sakura)',
									opacity: 0.4,
									letterSpacing: '0.05em',
									transition: 'opacity 0.2s',
									minWidth: '1.5rem',
								}}
							>{kanji}</span>
							<span
								className='mobile-link-label'
								style={{
									fontFamily: 'var(--font-bangers)',
									fontSize: 'clamp(2.4rem, 11vw, 3.8rem)',
									letterSpacing: '0.06em',
									textTransform: 'uppercase',
									color: 'var(--muted)',
									lineHeight: 1.1,
									transition: 'color 0.2s',
								}}
							>{label}</span>
						</a>
					))}

					{/* Bottom status */}
					<div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginTop: '2rem', fontSize: '0.7rem', letterSpacing: '0.25em', color: 'rgba(255,255,255,0.2)', textTransform: 'uppercase' }}>
						<span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--sakura)', display: 'inline-block', boxShadow: '0 0 8px rgba(212,43,43,0.6)' }} />
						Available for work · Tampa, FL
					</div>
				</div>
			)}
		</>
	);
}
