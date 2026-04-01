'use client';

export function Hero() {
	const panelBorder = '1px solid rgba(212,43,43,0.2)';

	return (
		<section
			id='hero'
			className='hero-grid'
			style={{
				borderBottom: panelBorder,
				position: 'relative',
				zIndex: 10,
			}}
		>
			{/* Left panel */}
			<div className='hero-left' style={{
				borderRight: '1px solid rgba(212,43,43,0.18)',
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				position: 'relative',
				overflow: 'hidden',
			}}>
				{/* Ghost kanji watermark */}
				<span style={{
					position: 'absolute',
					bottom: '1rem',
					right: '1.5rem',
					fontFamily: 'var(--font-bangers)',
					fontSize: '9rem',
					color: 'rgba(212,43,43,0.04)',
					lineHeight: 1,
					pointerEvents: 'none',
					userSelect: 'none',
				}}>侵透</span>

				{/* Speech bubble */}
				<div style={{
					display: 'inline-block',
					background: 'rgba(212,43,43,0.12)',
					border: '1px solid var(--sakura-dim)',
					color: 'var(--sakura)',
					fontFamily: 'var(--font-bangers)',
					fontSize: '0.85rem',
					letterSpacing: '0.2em',
					padding: '0.45rem 1rem',
					marginBottom: '1.75rem',
					position: 'relative',
					alignSelf: 'flex-start',
				}}>
					情報セキュリティ — CYBERSECURITY ENGINEER
					<span style={{
						position: 'absolute',
						bottom: -9,
						left: 18,
						width: 0,
						height: 0,
						borderLeft: '9px solid transparent',
						borderRight: '9px solid transparent',
						borderTop: '9px solid var(--sakura-dim)',
					}} />
				</div>

				{/* Name */}
				<h1 style={{
					fontFamily: 'var(--font-bangers)',
					fontSize: 'clamp(4rem,9vw,8rem)',
					lineHeight: 0.88,
					letterSpacing: '0.03em',
					textTransform: 'uppercase',
					marginBottom: '0.6rem',
				}}>
					<span style={{ color: 'var(--text)' }}>LANDON</span>
					<br />
					<span style={{ WebkitTextStroke: '2px #d42b2b', color: 'transparent' }}>BRAYE</span>
					<br />
					<span style={{ color: '#d42b2b', fontSize: '0.55em' }}>守護者</span>
				</h1>

				{/* Tagline */}
				<div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '0.6rem', marginBottom: '1.75rem', maxWidth: 520 }}>
					{[
						{ label: 'Cybersecurity Engineer', color: 'var(--text)' },
						{ label: 'Wannabe Hacker', color: 'var(--text)' },
						{ label: 'Vibe Coder', color: 'var(--text)' },
						{ label: 'Aspiring Agentic AI Engineer', color: 'var(--text)' },
						{ label: 'Japanese Anime Fan', color: 'var(--sakura)' },
						{ label: 'Privacy Advocate', color: 'var(--text)' },
						{ label: 'Father', color: 'var(--cyan)' },
						{ label: 'Husband', color: 'var(--cyan)' },
						{ label: 'Son', color: 'var(--cyan)' },
						{ label: 'Veteran', color: 'var(--sakura)' },
					].map((item, i, arr) => (
						<span key={item.label} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
							<span style={{ color: item.color, fontSize: '0.82rem', letterSpacing: '0.12em', fontWeight: 300 }}>{item.label}</span>
							{i < arr.length - 1 && (
								<span style={{ width: 4, height: 4, borderRadius: '50%', background: 'var(--cyan)', display: 'inline-block', flexShrink: 0, opacity: 0.6 }} />
							)}
						</span>
					))}
				</div>

				{/* Desc */}
				<p style={{
					fontSize: '0.97rem',
					lineHeight: 1.85,
					fontWeight: 300,
					color: 'var(--muted)',
					maxWidth: 440,
					marginBottom: '2.5rem',
					border: '1px solid rgba(255,255,255,0.07)',
					padding: '1rem 1.2rem',
					background: 'rgba(255,255,255,0.025)',
				}}>
					I break things for a living (legally). By day I&apos;m locking down networks and wrangling compliance frameworks. By night I&apos;m vibe-coding AI experiments and convincing myself I&apos;ll sleep soon. USAF vet, Tampa local, dad of legends.
				</p>

				{/* CTAs */}
				<div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
					<a
						href='#contact'
						style={{
							fontFamily: 'var(--font-bangers)',
							fontSize: '1.1rem',
							letterSpacing: '0.18em',
							textTransform: 'uppercase',
							textDecoration: 'none',
							padding: '0.75rem 2rem',
							background: 'linear-gradient(135deg, var(--sakura), #8b0000)',
							color: 'white',
							position: 'relative',
							overflow: 'hidden',
							display: 'inline-block',
						}}
						onMouseEnter={e => {
							const shimmer = e.currentTarget.querySelector('.shimmer') as HTMLElement;
							if (shimmer) shimmer.style.animation = 'shimmer 0.5s forwards';
						}}
						onMouseLeave={e => {
							const shimmer = e.currentTarget.querySelector('.shimmer') as HTMLElement;
							if (shimmer) { shimmer.style.animation = 'none'; }
						}}
					>
						<span className='shimmer' style={{
							position: 'absolute', inset: 0,
							background: 'rgba(255,255,255,0.2)',
							transform: 'translateX(-120%) skewX(-15deg)',
						}} />
						Make Contact
					</a>
					<a
						href='#services'
						style={{
							fontFamily: 'var(--font-bangers)',
							fontSize: '1.1rem',
							letterSpacing: '0.18em',
							textTransform: 'uppercase',
							textDecoration: 'none',
							padding: '0.75rem 2rem',
							border: '1px solid rgba(212,43,43,0.35)',
							color: 'var(--text)',
							background: 'transparent',
							transition: 'border-color 0.2s, color 0.2s',
							display: 'inline-block',
						}}
						onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--sakura)'; e.currentTarget.style.color = 'var(--sakura)'; }}
						onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(212,43,43,0.35)'; e.currentTarget.style.color = 'var(--text)'; }}
					>
						See Missions
					</a>
				</div>

				{/* Stats row */}
				<div style={{
					display: 'flex',
					gap: '2.5rem',
					marginTop: '4rem',
					paddingTop: '2.5rem',
					borderTop: '1px solid rgba(212,43,43,0.15)',
					flexWrap: 'wrap',
				}}>
					{[
						{ num: '8', unit: '+', label: 'Years Experience' },
						{ num: '11', unit: '+', label: 'Certifications' },
						{ num: '10', unit: 'k+', label: 'Vulns Remediated' },
						{ num: '16', unit: 'yr', label: 'USAF Veteran' },
					].map(({ num, unit, label }) => (
						<div key={label} style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
							<span style={{ fontFamily: 'var(--font-cinzel)', fontSize: '2.2rem', fontWeight: 700, color: 'var(--text)', lineHeight: 1 }}>
								{num}<span style={{ color: 'var(--sakura)' }}>{unit}</span>
							</span>
							<span style={{ fontSize: '0.68rem', letterSpacing: '0.28em', textTransform: 'uppercase', color: 'var(--muted)' }}>{label}</span>
						</div>
					))}
				</div>
			</div>

			{/* Right panel */}
			<div className='hero-right' style={{
				background: 'rgba(8,8,16,0.6)',
				flexDirection: 'column',
				justifyContent: 'flex-end',
				alignItems: 'center',
				padding: '8rem 3rem 3rem',
				position: 'relative',
				overflow: 'hidden',
			}}>
				{/* Diagonal stripe texture */}
				<div style={{
					position: 'absolute',
					inset: 0,
					background: 'repeating-linear-gradient(45deg, transparent, transparent 24px, rgba(212,43,43,0.012) 24px, rgba(212,43,43,0.012) 48px)',
				}} />

				{/* Character placeholder */}
				<div style={{
					width: 280,
					height: 370,
					border: '1px dashed rgba(212,43,43,0.25)',
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					justifyContent: 'center',
					color: 'rgba(212,43,43,0.3)',
					fontSize: '0.75rem',
					letterSpacing: '0.25em',
					textAlign: 'center',
					position: 'relative',
					zIndex: 2,
					marginBottom: '2rem',
				}}>
					<span style={{ fontFamily: 'var(--font-bangers)', fontSize: '5rem', display: 'block', marginBottom: '0.5rem', color: 'rgba(212,43,43,0.2)' }}>侍</span>
					CHARACTER ART<br />HERE
				</div>

				{/* Stats box */}
				<div style={{
					background: 'rgba(212,43,43,0.1)',
					border: '1px solid rgba(212,43,43,0.4)',
					padding: '1.25rem 1.75rem',
					width: '100%',
					maxWidth: 340,
					position: 'relative',
					zIndex: 2,
					boxShadow: '0 0 30px rgba(212,43,43,0.12)',
				}}>
					<h3 style={{
						fontFamily: 'var(--font-bangers)',
						fontSize: '0.9rem',
						letterSpacing: '0.22em',
						color: 'var(--sakura)',
						borderBottom: '1px solid rgba(212,43,43,0.2)',
						paddingBottom: '0.6rem',
						marginBottom: '0.9rem',
					}}>// CHARACTER STATS</h3>
					{[
						['GCIH', 'CERTIFIED'],
						['GSEC', 'CERTIFIED'],
						['SEC+', 'COMPTIA'],
						['CLEARANCE', 'SECRET'],
						['STATUS', 'AVAILABLE'],
					].map(([key, val]) => (
						<div key={key} style={{
							display: 'flex',
							justifyContent: 'space-between',
							fontSize: '0.82rem',
							fontWeight: 700,
							letterSpacing: '0.12em',
							color: 'var(--text)',
							marginBottom: '0.35rem',
						}}>
							<span>{key}</span>
							<span style={{ color: 'var(--void)', background: 'var(--sakura)', padding: '0 0.5rem', fontSize: '0.78rem' }}>{val}</span>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
