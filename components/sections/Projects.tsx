'use client';

const PROJECTS = [
	{
		kanji: '狩',
		title: 'Hunter Blue',
		status: 'WIP',
		desc: 'A threat-hunting workbench for SOC analysts. Log ingest, entity extraction, timeline view, and findings management in one workflow. Still iterating on the investigation UX before it earns the word "platform."',
		tags: ['Next.js', 'TypeScript', 'Drizzle', 'Turso', 'Threat Hunting'],
		github: '',
		demo: '',
	},
	{
		kanji: '選',
		title: 'HB-Triage',
		status: 'WIP',
		desc: 'The CLI front door for Hunter Blue. Takes raw logs, runs LLM-assisted IOC extraction, and emits a structured hunt payload ready to ingest. Handles the "what happened" so Hunter Blue can focus on the "dig in."',
		tags: ['Python', 'LLM', 'IOC Extraction', 'SOC Tooling', 'CLI'],
		github: '',
		demo: '',
	},
	{
		kanji: '輸',
		title: 'Truckers Backoffice Assistant',
		status: 'WIP',
		desc: 'A multi-tenant dashboard for small trucking operations. Drop a rate contract in, Claude pulls the fields out, invoices and driver comms go out the other end. Built to cut the paperwork loop owner-operators hate.',
		tags: ['Next.js', 'Claude API', 'Multi-tenant', 'Twilio', 'Resend'],
		github: '',
		demo: '',
	},
	{
		kanji: '癒',
		title: 'Holistic Health Network',
		status: 'WIP',
		desc: 'A directory and resource hub for holistic health — practitioners, herb database, community-contributed maps. An AI advisor is scaffolded for symptom-to-resource suggestions. Not medical advice; a starting point.',
		tags: ['Next.js', 'TypeScript', 'Drizzle', 'Health', 'Community'],
		github: '',
		demo: '',
	},
	{
		kanji: '闘',
		title: 'Fighters Row',
		status: 'WIP',
		desc: 'A combat-sports platform where fans pledge toward the bouts they want to see. Ranking tiers gate who can challenge whom; leagues scope the tournaments. Stripe handles payments and KYC.',
		tags: ['Next.js', 'Stripe', 'NextAuth', 'Drizzle', 'Combat Sports'],
		github: '',
		demo: '',
	},
	{
		kanji: '眼',
		title: 'This Portfolio',
		status: 'Live',
		desc: 'Built with Next.js 16, vibe-coded at midnight, and powered by too much herbal tea and AI pair programming. Dark-manga aesthetic, red-duotone video landing, hardened contact form. Meta? Yes. Relevant? Absolutely.',
		tags: ['Next.js', 'TypeScript', 'Resend', 'Claude'],
		github: '',
		demo: '',
	},
];

const STATUS_COLORS: Record<string, string> = {
	Live: 'var(--cyan)',
	WIP: 'var(--sakura)',
	Archived: 'var(--muted)',
};

export function Projects() {
	return (
		<section
			id='projects'
			style={{
				borderBottom: '1px solid rgba(212,43,43,0.18)',
				position: 'relative',
				zIndex: 10,
				background: 'rgba(8,8,16,0.3)',
			}}
		>
			{/* Section header */}
			<div className='section-hpad' style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
				<span style={{ fontFamily: 'var(--font-cinzel)', fontSize: '0.7rem', letterSpacing: '0.45em', color: 'var(--sakura)', textTransform: 'uppercase', whiteSpace: 'nowrap' }}>02.5 — Projects</span>
				<div style={{ flex: 1, height: 1, background: 'linear-gradient(90deg, rgba(212,43,43,0.25), transparent)' }} />
			</div>
			<div className='section-tpad'>
				<h2 style={{ fontFamily: 'var(--font-cinzel)', fontSize: 'clamp(1.8rem,3.5vw,3rem)', fontWeight: 600, letterSpacing: '0.05em' }}>
					Things I&apos;ve <span style={{ color: 'var(--sakura)' }}>Built</span>
				</h2>
			</div>

			{/* Grid */}
			<div className='tri-grid' style={{ borderTop: '1px solid rgba(212,43,43,0.18)' }}>
				{PROJECTS.map((p, i) => (
					<div
						key={p.title}
						style={{
							borderRight: i % 3 !== 2 ? '1px solid rgba(212,43,43,0.18)' : 'none',
							borderBottom: i < 3 ? '1px solid rgba(212,43,43,0.18)' : 'none',
							padding: '2.5rem 2rem',
							position: 'relative',
							overflow: 'hidden',
							display: 'flex',
							flexDirection: 'column',
							gap: '1rem',
							transition: 'background 0.25s',
						}}
						onMouseEnter={e => { e.currentTarget.style.background = 'rgba(212,43,43,0.05)'; }}
						onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; }}
					>
						{/* Ghost kanji */}
						<span style={{
							position: 'absolute', top: '-0.5rem', right: '-0.3rem',
							fontFamily: 'var(--font-bangers)', fontSize: '6.5rem',
							color: 'rgba(212,43,43,0.04)', lineHeight: 1,
							userSelect: 'none', pointerEvents: 'none',
						}}>{p.kanji}</span>

						{/* Header row */}
						<div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '0.5rem' }}>
							<div style={{ fontSize: '2rem', color: 'var(--sakura)', lineHeight: 1 }}>{p.kanji}</div>
							<span style={{
								fontSize: '0.62rem',
								letterSpacing: '0.2em',
								textTransform: 'uppercase',
								color: STATUS_COLORS[p.status],
								border: `1px solid ${STATUS_COLORS[p.status]}`,
								padding: '0.2rem 0.55rem',
								whiteSpace: 'nowrap',
								opacity: 0.85,
							}}>{p.status}</span>
						</div>

						<div style={{ width: '2rem', height: 2, background: 'linear-gradient(90deg, var(--sakura), var(--cyan))' }} />

						<h3 style={{ fontFamily: 'var(--font-cinzel)', fontSize: '0.98rem', fontWeight: 600, letterSpacing: '0.06em', color: 'var(--text)', lineHeight: 1.4 }}>
							{p.title}
						</h3>

						<p style={{ fontSize: '0.86rem', lineHeight: 1.8, fontWeight: 300, color: 'rgba(255,255,255,0.5)', flex: 1 }}>
							{p.desc}
						</p>

						{/* Tags */}
						<div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
							{p.tags.map(tag => (
								<span key={tag} style={{
									fontSize: '0.62rem',
									letterSpacing: '0.12em',
									textTransform: 'uppercase',
									color: 'var(--muted)',
									background: 'rgba(255,255,255,0.04)',
									border: '1px solid rgba(255,255,255,0.07)',
									padding: '0.2rem 0.5rem',
								}}>{tag}</span>
							))}
						</div>

						{/* Links */}
						{(p.github || p.demo) && (
							<div style={{ display: 'flex', gap: '1rem', marginTop: '0.25rem' }}>
								{p.github && (
									<a href={p.github} style={{
										fontSize: '0.7rem',
										letterSpacing: '0.18em',
										textTransform: 'uppercase',
										color: 'var(--muted)',
										textDecoration: 'none',
										transition: 'color 0.2s',
									}}
									onMouseEnter={e => (e.currentTarget.style.color = 'var(--cyan)')}
									onMouseLeave={e => (e.currentTarget.style.color = 'var(--muted)')}
									>GitHub →</a>
								)}
								{p.demo && (
									<a href={p.demo} style={{
										fontSize: '0.7rem',
										letterSpacing: '0.18em',
										textTransform: 'uppercase',
										color: 'var(--muted)',
										textDecoration: 'none',
										transition: 'color 0.2s',
									}}
									onMouseEnter={e => (e.currentTarget.style.color = 'var(--sakura)')}
									onMouseLeave={e => (e.currentTarget.style.color = 'var(--muted)')}
									>Live →</a>
								)}
							</div>
						)}
					</div>
				))}
			</div>
		</section>
	);
}
