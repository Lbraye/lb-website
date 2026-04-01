'use client';

const panelBorder = '1px solid rgba(212,43,43,0.18)';

const SERVICES = [
	{ kanji: '脆', title: 'Vulnerability Management', jp: '脆弱性管理', desc: 'I find the holes in your network before someone else does. Rapid7, Nessus, Nmap — the full arsenal. Then I help you actually fix them instead of just making the dashboard look pretty.' },
	{ kanji: '準', title: 'Compliance & GRC', jp: 'コンプライアンス', desc: 'NIST, CMMC, PCI DSS — I speak fluent compliance without putting people to sleep. Policies that get followed, audits that don\'t end in panic, POA&Ms that actually get worked.' },
	{ kanji: '応', title: 'Incident Response', jp: 'インシデント対応', desc: 'GCIH-certified and calm under fire. When something goes sideways I\'m the person you want in the room — hunting threats, tracing root cause, and keeping leadership from losing their minds.' },
	{ kanji: '守', title: 'Network Defense', jp: 'ネットワーク防御', desc: 'Cisco Meraki, Umbrella, SonicWall, Mimecast — I architect defense-in-depth solutions that actually hold. Think of me as the person who locks every door and then checks if the windows are open.' },
	{ kanji: '侵', title: 'Penetration Testing', jp: '侵透テスト', desc: 'Wannabe hacker with a license to try. I test your defenses the way real attackers would, then give you a report you can actually use — not a 200-page PDF nobody reads.' },
	{ kanji: '意', title: 'Security Awareness', jp: 'セキュリティ教育', desc: 'Took a team from 22% phish-prone down to 6% in a year. Training that sticks because it doesn\'t feel like a dentist appointment. People are your biggest risk — let\'s fix that.' },
];

export function Services() {
	return (
		<section
			id='services'
			style={{
				borderBottom: panelBorder,
				position: 'relative',
				zIndex: 10,
				background: 'rgba(8,8,16,0.5)',
			}}
		>
			{/* Section header */}
			<div className='section-hpad' style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
				<span style={{ fontFamily: 'var(--font-cinzel)', fontSize: '0.7rem', letterSpacing: '0.45em', color: 'var(--sakura)', textTransform: 'uppercase', whiteSpace: 'nowrap' }}>02 — Services</span>
				<div style={{ flex: 1, height: 1, background: 'linear-gradient(90deg, rgba(212,43,43,0.25), transparent)' }} />
			</div>

			{/* Title bar */}
			<div className='section-tpad services-title-bar' style={{
				display: 'flex',
				alignItems: 'baseline',
				gap: '1.5rem',
				borderBottom: '1px solid rgba(212,43,43,0.25)',
				paddingBottom: '1.5rem',
				marginBottom: 0,
			}}>
				<h2 style={{ fontFamily: 'var(--font-bangers)', fontSize: 'clamp(2.5rem,5vw,4rem)', letterSpacing: '0.06em', color: 'var(--text)' }}>
					What I Do
				</h2>
				<span style={{ fontFamily: 'var(--font-bangers)', fontSize: '1.1rem', letterSpacing: '0.2em', color: 'var(--sakura)' }}>任務の種類</span>
			</div>

			{/* Services grid */}
			<div className='tri-grid'>
				{SERVICES.map((svc, i) => (
					<div
						key={svc.title}
						style={{
							borderRight: i % 3 !== 2 ? panelBorder : 'none',
							borderBottom: i < 3 ? panelBorder : 'none',
							padding: '2.5rem 2.2rem',
							position: 'relative',
							overflow: 'hidden',
							transition: 'background 0.25s',
						}}
						onMouseEnter={e => { e.currentTarget.style.background = 'rgba(212,43,43,0.06)'; }}
						onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; }}
					>
						{/* Ghost kanji number */}
						<span style={{
							position: 'absolute', top: '-0.5rem', right: '-0.3rem',
							fontFamily: 'var(--font-bangers)', fontSize: '6.5rem',
							color: 'rgba(212,43,43,0.04)', lineHeight: 1,
							userSelect: 'none', pointerEvents: 'none',
						}}>0{i + 1}</span>

						{/* Gradient line */}
						<div style={{ width: '2.5rem', height: 2, background: 'linear-gradient(90deg, var(--sakura), var(--cyan))', marginBottom: '1.25rem' }} />

						{/* Kanji icon */}
						<div style={{ fontSize: '2.2rem', color: 'var(--sakura)', lineHeight: 1, marginBottom: '0.5rem' }}>{svc.kanji}</div>

						<h3 style={{ fontFamily: 'var(--font-cinzel)', fontSize: '0.98rem', fontWeight: 600, letterSpacing: '0.08em', marginBottom: '0.4rem', color: 'var(--text)' }}>
							{svc.title}
						</h3>
						<p style={{ fontSize: '0.7rem', letterSpacing: '0.22em', color: 'var(--sakura)', marginBottom: '0.9rem' }}>{svc.jp}</p>
						<p style={{ fontSize: '0.87rem', lineHeight: 1.8, fontWeight: 300, color: 'rgba(255,255,255,0.45)' }}>{svc.desc}</p>
					</div>
				))}
			</div>
		</section>
	);
}
