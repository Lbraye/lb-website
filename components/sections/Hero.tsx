import Link from 'next/link';

const TAGLINE = [
	{ label: 'Cybersecurity Engineer', tone: 'text' },
	{ label: 'Wannabe Hacker', tone: 'text' },
	{ label: 'Vibe Coder', tone: 'text' },
	{ label: 'Aspiring Agentic AI Engineer', tone: 'text' },
	{ label: 'Japanese Anime Fan', tone: 'sakura' },
	{ label: 'Privacy Advocate', tone: 'text' },
	{ label: 'Father', tone: 'cyan' },
	{ label: 'Husband', tone: 'cyan' },
	{ label: 'Son', tone: 'cyan' },
	{ label: 'Veteran', tone: 'sakura' },
] as const;

const STATS = [
	{ num: '8', unit: '+', label: 'Years Experience' },
	{ num: '11', unit: '+', label: 'Certifications' },
	{ num: '10', unit: 'k+', label: 'Vulns Remediated' },
	{ num: '100', unit: '+', label: 'Threats Neutralized' },
];

const CHARACTER_STATS: [string, string][] = [
	['GCIH', 'CERTIFIED'],
	['GSEC', 'CERTIFIED'],
	['SEC+', 'COMPTIA'],
	['CLEARANCE', 'SECRET'],
	['STATUS', 'AVAILABLE'],
];

const toneColor = (tone: 'text' | 'sakura' | 'cyan') =>
	tone === 'sakura' ? 'var(--sakura)' : tone === 'cyan' ? 'var(--cyan)' : 'var(--text)';

export function Hero() {
	return (
		<section id='hero' className='hero-grid mg-section'>
			{/* Left panel */}
			<div
				className='hero-left'
				style={{
					borderRight: 'var(--panel-border-soft)',
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					position: 'relative',
					overflow: 'hidden',
				}}
			>
				{/* Ghost kanji watermark */}
				<span
					aria-hidden
					style={{
						position: 'absolute',
						bottom: '1rem',
						right: '1.5rem',
						fontFamily: 'var(--font-bangers)',
						fontSize: '9rem',
						color: 'rgba(212,43,43,0.04)',
						lineHeight: 1,
						pointerEvents: 'none',
						userSelect: 'none',
					}}
				>
					侵透
				</span>

				{/* Speech bubble */}
				<div
					style={{
						display: 'inline-block',
						alignSelf: 'flex-start',
						background: 'rgba(212,43,43,0.12)',
						border: '1px solid var(--sakura-dim)',
						color: 'var(--sakura)',
						fontFamily: 'var(--font-bangers)',
						fontSize: '0.85rem',
						letterSpacing: '0.2em',
						padding: '0.45rem 1rem',
						marginBottom: '1.75rem',
						position: 'relative',
					}}
				>
					情報セキュリティ — CYBERSECURITY ENGINEER
					<span
						aria-hidden
						style={{
							position: 'absolute',
							bottom: -9,
							left: 18,
							width: 0,
							height: 0,
							borderLeft: '9px solid transparent',
							borderRight: '9px solid transparent',
							borderTop: '9px solid var(--sakura-dim)',
						}}
					/>
				</div>

				{/* Name */}
				<h1
					style={{
						fontFamily: 'var(--font-bangers)',
						fontSize: 'clamp(4rem,9vw,8rem)',
						lineHeight: 0.88,
						letterSpacing: '0.03em',
						textTransform: 'uppercase',
						marginBottom: '0.6rem',
					}}
				>
					<span style={{ color: 'var(--text)' }}>LANDON</span>
					<br />
					<span style={{ WebkitTextStroke: '2px var(--sakura)', color: 'transparent' }}>BRAYE</span>
					<br />
					<span style={{ color: 'var(--sakura)', fontSize: '0.55em' }}>守護者</span>
				</h1>

				{/* Tagline */}
				<div
					style={{
						display: 'flex',
						flexWrap: 'wrap',
						alignItems: 'center',
						gap: '0.6rem',
						marginBottom: '1.75rem',
						maxWidth: 520,
					}}
				>
					{TAGLINE.map((item, i, arr) => (
						<span key={item.label} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
							<span
								style={{
									color: toneColor(item.tone),
									fontSize: '0.82rem',
									letterSpacing: '0.12em',
									fontWeight: 300,
								}}
							>
								{item.label}
							</span>
							{i < arr.length - 1 && (
								<span
									aria-hidden
									style={{
										width: 4,
										height: 4,
										borderRadius: '50%',
										background: 'var(--cyan)',
										display: 'inline-block',
										flexShrink: 0,
										opacity: 0.6,
									}}
								/>
							)}
						</span>
					))}
				</div>

				{/* Description */}
				<p
					style={{
						fontSize: '0.97rem',
						lineHeight: 1.85,
						fontWeight: 300,
						color: 'var(--muted)',
						maxWidth: 440,
						marginBottom: '2.5rem',
						border: '1px solid rgba(255,255,255,0.07)',
						padding: '1rem 1.2rem',
						background: 'rgba(255,255,255,0.025)',
					}}
				>
					I break things for a living (legally). By day I&apos;m locking down networks and wrangling compliance frameworks.
					By night I&apos;m vibe-coding AI experiments and convincing myself I&apos;ll sleep soon. USAF vet, Tampa local,
					dad of legends.
				</p>

				{/* CTAs */}
				<div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
					<Link href='/contact' className='mg-btn mg-btn-primary'>
						<span className='shimmer' aria-hidden />
						Make Contact
					</Link>
					<Link href='/services' className='mg-btn mg-btn-ghost'>
						See Missions
					</Link>
				</div>

				{/* Stats row */}
				<div
					style={{
						display: 'flex',
						gap: '2.5rem',
						marginTop: '4rem',
						paddingTop: '2.5rem',
						borderTop: '1px solid rgba(212,43,43,0.15)',
						flexWrap: 'wrap',
					}}
				>
					{STATS.map(({ num, unit, label }) => (
						<div key={label} style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
							<span
								style={{
									fontFamily: 'var(--font-cinzel)',
									fontSize: '2.2rem',
									fontWeight: 700,
									color: 'var(--text)',
									lineHeight: 1,
								}}
							>
								{num}
								<span style={{ color: 'var(--sakura)' }}>{unit}</span>
							</span>
							<span
								style={{
									fontSize: '0.68rem',
									letterSpacing: '0.28em',
									textTransform: 'uppercase',
									color: 'var(--muted)',
								}}
							>
								{label}
							</span>
						</div>
					))}
				</div>
			</div>

			{/* Right panel — character stats dossier (no more placeholder) */}
			<div
				className='hero-right'
				style={{
					background: 'rgba(8,8,16,0.6)',
					flexDirection: 'column',
					justifyContent: 'center',
					alignItems: 'center',
					padding: '8rem 3rem 3rem',
					position: 'relative',
					overflow: 'hidden',
				}}
			>
				{/* Diagonal stripe texture */}
				<div
					aria-hidden
					style={{
						position: 'absolute',
						inset: 0,
						background:
							'repeating-linear-gradient(45deg, transparent, transparent 24px, rgba(212,43,43,0.012) 24px, rgba(212,43,43,0.012) 48px)',
					}}
				/>

				{/* Kanji watermark replacing character art placeholder */}
				<span
					aria-hidden
					style={{
						position: 'absolute',
						top: '18%',
						left: '50%',
						transform: 'translateX(-50%)',
						fontFamily: 'var(--font-bangers)',
						fontSize: 'clamp(9rem, 22vw, 18rem)',
						color: 'rgba(212,43,43,0.07)',
						lineHeight: 1,
						pointerEvents: 'none',
						userSelect: 'none',
						zIndex: 1,
					}}
				>
					侍
				</span>

				{/* Dossier card */}
				<div
					style={{
						background: 'rgba(212,43,43,0.1)',
						border: '1px solid rgba(212,43,43,0.4)',
						padding: '1.25rem 1.75rem',
						width: '100%',
						maxWidth: 360,
						position: 'relative',
						zIndex: 2,
						boxShadow: '0 0 30px rgba(212,43,43,0.12)',
					}}
				>
					<h3
						style={{
							fontFamily: 'var(--font-bangers)',
							fontSize: '0.9rem',
							letterSpacing: '0.22em',
							color: 'var(--sakura)',
							borderBottom: '1px solid rgba(212,43,43,0.2)',
							paddingBottom: '0.6rem',
							marginBottom: '0.9rem',
						}}
					>
						// CHARACTER DOSSIER
					</h3>
					{CHARACTER_STATS.map(([key, val]) => (
						<div
							key={key}
							style={{
								display: 'flex',
								justifyContent: 'space-between',
								fontSize: '0.82rem',
								fontWeight: 700,
								letterSpacing: '0.12em',
								color: 'var(--text)',
								marginBottom: '0.35rem',
							}}
						>
							<span>{key}</span>
							<span
								style={{
									color: 'var(--void)',
									background: 'var(--sakura)',
									padding: '0 0.5rem',
									fontSize: '0.78rem',
								}}
							>
								{val}
							</span>
						</div>
					))}

					{/* Footer: tampa coords */}
					<div
						style={{
							marginTop: '1rem',
							paddingTop: '0.8rem',
							borderTop: '1px solid rgba(212,43,43,0.15)',
							display: 'flex',
							justifyContent: 'space-between',
							fontSize: '0.62rem',
							letterSpacing: '0.24em',
							textTransform: 'uppercase',
							color: 'var(--muted)',
						}}
					>
						<span>LOC</span>
						<span>27.9506°N 82.4572°W · TPA</span>
					</div>
				</div>
			</div>
		</section>
	);
}
