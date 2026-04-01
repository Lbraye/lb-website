'use client';

const panelBorder = '1px solid rgba(212,43,43,0.18)';

const CERTS = [
	{ abbr: 'GC', name: 'GCIH', sub: 'GIAC Certified Incident Handler' },
	{ abbr: 'GS', name: 'GSEC', sub: 'GIAC Security Essentials' },
	{ abbr: 'S+', name: 'Sec+', sub: 'CompTIA Security+' },
	{ abbr: 'WH', name: 'CWA', sub: 'Certified WhiteHat Hacker Associate' },
];

const TOOLS = ['Rapid7 InsightVM', 'Rapid7 InsightIDR', 'Tenable Nessus', 'SentinelOne', 'Kali Linux', 'Metasploit', 'Nmap', 'Cisco Meraki', 'Cisco Umbrella', 'KnowBe4', 'Microsoft Azure', 'AWS Cloud', 'Powershell', 'VMware', 'Mimecast', 'SonicWall'];

export function About() {
	return (
		<section
			id='about'
			style={{
				borderBottom: panelBorder,
				position: 'relative',
				zIndex: 10,
			}}
		>
			{/* Section header */}
			<div className='section-hpad' style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
				<span style={{ fontFamily: 'var(--font-cinzel)', fontSize: '0.7rem', letterSpacing: '0.45em', color: 'var(--sakura)', textTransform: 'uppercase', whiteSpace: 'nowrap' }}>01 — About</span>
				<div style={{ flex: 1, height: 1, background: 'linear-gradient(90deg, rgba(212,43,43,0.25), transparent)' }} />
			</div>
			<div className='section-tpad'>
				<h2 style={{ fontFamily: 'var(--font-cinzel)', fontSize: 'clamp(1.8rem,3.5vw,3rem)', fontWeight: 600, letterSpacing: '0.05em' }}>
					The <span style={{ color: 'var(--sakura)' }}>Whole Picture</span>
				</h2>
			</div>

			{/* Three manga panels */}
			<div className='about-grid' style={{ borderTop: panelBorder }}>
				{/* Panel 1 — Profile + Certs */}
				<div style={{
					borderRight: panelBorder,
					padding: '2.5rem 2rem',
					position: 'relative',
					background: 'rgba(212,43,43,0.04)',
					overflow: 'hidden',
				}}>
					<span style={{
						position: 'absolute', top: '0.75rem', right: '0.75rem',
						fontFamily: 'var(--font-bangers)', fontSize: '5rem',
						color: 'rgba(212,43,43,0.06)', lineHeight: 1, userSelect: 'none',
					}}>01</span>
					<h3 style={{ fontFamily: 'var(--font-cinzel)', fontSize: '1.2rem', fontWeight: 600, letterSpacing: '0.08em', marginBottom: '1rem', color: 'var(--sakura)' }}>Profile</h3>
					<p style={{ fontSize: '0.9rem', lineHeight: 1.8, fontWeight: 300, color: 'var(--muted)', marginBottom: '1.5rem' }}>
						Cybersecurity Engineer with 8+ years in network defense, vulnerability management, and compliance. Veteran — Secret Clearance. Tampa, FL.
					</p>
					<div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
						{CERTS.map(c => (
							<div key={c.name} style={{
								display: 'flex', alignItems: 'center', gap: '0.75rem',
								padding: '0.6rem 0.8rem',
								background: 'var(--glass)',
								border: panelBorder,
								transition: 'border-color 0.2s',
							}}
							onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(212,43,43,0.5)')}
							onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(212,43,43,0.18)')}
							>
								<div style={{
									width: 32, height: 32, flexShrink: 0,
									background: 'linear-gradient(135deg, var(--sakura), #8b0000)',
									display: 'flex', alignItems: 'center', justifyContent: 'center',
									fontSize: '0.6rem', fontWeight: 700,
								}}>{c.abbr}</div>
								<div>
									<div style={{ fontWeight: 700, fontSize: '0.82rem', letterSpacing: '0.1em' }}>{c.name}</div>
									<div style={{ fontSize: '0.68rem', color: 'var(--muted)', letterSpacing: '0.06em' }}>{c.sub}</div>
								</div>
							</div>
						))}
					</div>
				</div>

				{/* Panel 2 — Story + Tools */}
				<div style={{
					borderRight: panelBorder,
					padding: '2.5rem 2.5rem',
					position: 'relative',
					overflow: 'hidden',
				}}>
					<span style={{
						position: 'absolute', top: '0.75rem', right: '0.75rem',
						fontFamily: 'var(--font-bangers)', fontSize: '5rem',
						color: 'rgba(255,255,255,0.03)', lineHeight: 1, userSelect: 'none',
					}}>02</span>
					<h3 style={{ fontFamily: 'var(--font-cinzel)', fontSize: '1.2rem', fontWeight: 600, letterSpacing: '0.08em', marginBottom: '1.25rem' }}>The Story</h3>
					<p style={{ fontSize: '0.93rem', lineHeight: 1.95, fontWeight: 300, color: 'rgba(255,255,255,0.55)', marginBottom: '1.25rem' }}>
						Started my career in the Air Force figuring out how adversaries think — turns out that&apos;s a pretty useful skill when your job is to stop them. 8+ years later I&apos;m still having fun breaking things on purpose so the bad guys can&apos;t break them for real.
					</p>
					<p style={{ fontSize: '0.93rem', lineHeight: 1.95, fontWeight: 300, color: 'rgba(255,255,255,0.55)', marginBottom: '2rem' }}>
						These days I&apos;m deep in the agentic AI rabbit hole — building workflows that make me look way more productive than I am. When I&apos;m not in a terminal or a compliance doc, I&apos;m probably being humbled by my kids or watching film on the couch in Tampa.
					</p>
					<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}>
						{TOOLS.map(tool => (
							<div
								key={tool}
								style={{
									padding: '0.45rem 0.7rem',
									background: 'var(--glass)',
									border: '1px solid var(--glass-border)',
									fontSize: '0.7rem',
									letterSpacing: '0.14em',
									textTransform: 'uppercase',
									color: 'var(--muted)',
									transition: 'all 0.2s',
									cursor: 'default',
								}}
								onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(126,232,250,0.35)'; e.currentTarget.style.color = 'var(--cyan)'; e.currentTarget.style.background = 'rgba(126,232,250,0.05)'; }}
								onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--glass-border)'; e.currentTarget.style.color = 'var(--muted)'; e.currentTarget.style.background = 'var(--glass)'; }}
							>{tool}</div>
						))}
					</div>
				</div>

				{/* Panel 3 — Japanese motto */}
				<div style={{
					padding: '2.5rem 2rem',
					position: 'relative',
					background: 'rgba(212,43,43,0.04)',
					overflow: 'hidden',
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'space-between',
				}}>
					<span style={{
						position: 'absolute', top: '0.75rem', right: '0.75rem',
						fontFamily: 'var(--font-bangers)', fontSize: '5rem',
						color: 'rgba(212,43,43,0.06)', lineHeight: 1, userSelect: 'none',
					}}>03</span>
					<div>
						<h3 style={{ fontFamily: 'var(--font-cinzel)', fontSize: '1.2rem', fontWeight: 600, letterSpacing: '0.08em', marginBottom: '1rem', color: 'var(--sakura)' }}>Current Vibe</h3>
						<p style={{ fontSize: '0.9rem', lineHeight: 1.8, fontWeight: 300, color: 'var(--muted)' }}>
							Building agentic AI workflows. Vibe-coding way too late. Drinking too much herbal tea. Trying to automate everything that bores me so I can focus on the stuff that doesn&apos;t.
						</p>
					</div>
					<p style={{ color: 'var(--sakura)', fontWeight: 700, fontSize: '0.82rem', letterSpacing: '0.18em', textTransform: 'uppercase' }}>
						防御 · 構築 · 革新
					</p>
				</div>
			</div>
		</section>
	);
}
