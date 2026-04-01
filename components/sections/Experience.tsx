const TIMELINE = [
	{
		date: '2022 — Present',
		title: 'Information Security Engineer',
		org: 'SOFWERX',
		desc: 'Establish and maintain security policies while implementing solutions to protect critical data on a restricted CUI network. Conduct risk and compliance assessments, establish POA&M, configure all security hardware and software, and advise executive leadership on information security risk.',
	},
	{
		date: '2019 — 2022',
		title: 'Information Security Analyst',
		org: 'Wounded Warrior Project',
		desc: 'Reduced phish-prone associates from 22% to 6% in year one. Eliminated 10,000+ enterprise-wide vulnerabilities through an efficient vulnerability management program. Led security validation and penetration testing on national and international networks.',
	},
	{
		date: '2018 — 2019',
		title: 'Applications Administrator',
		org: 'Wounded Warrior Project',
		desc: 'Ensured secure delivery of enterprise software applications. Developed a proprietary Power Apps solution for incident reporting, supported multi-tier environments (Dev, UAT, Production), and facilitated server application upgrades.',
	},
	{
		date: '2015 — 2018',
		title: 'Systems Engineer',
		org: 'Genesys / Interactive Intelligence',
		desc: 'Orchestrated direct support for client infrastructure including software installation, configuration, and maintenance. Achieved 90% client satisfaction. Utilized SQL queries for front-facing issue resolution and cultivated VM testing environments.',
	},
	{
		date: '2014 — 2015',
		title: 'Software Support Technician',
		org: 'DesertMicro',
		desc: 'Troubleshot and remediated client software issues. Formulated database maintenance plans using MS SQL Server. Administered user access, installed upgrades and patches, and managed backups and restores.',
	},
];

export function Experience() {
	return (
		<section
			id='experience'
			className='section-pad'
			style={{
				borderBottom: '1px solid rgba(212,43,43,0.18)',
				position: 'relative',
				zIndex: 10,
			}}
		>
			{/* Section header */}
			<div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '3rem' }}>
				<span style={{ fontFamily: 'var(--font-cinzel)', fontSize: '0.7rem', letterSpacing: '0.45em', color: 'var(--sakura)', textTransform: 'uppercase', whiteSpace: 'nowrap' }}>03 — Experience</span>
				<div style={{ flex: 1, height: 1, background: 'linear-gradient(90deg, rgba(212,43,43,0.25), transparent)' }} />
			</div>
			<h2 style={{ fontFamily: 'var(--font-cinzel)', fontSize: 'clamp(1.8rem,3.5vw,3rem)', fontWeight: 600, letterSpacing: '0.05em', marginBottom: '3.5rem' }}>
				Field <span style={{ color: 'var(--sakura)' }}>History</span>
			</h2>

			{/* Timeline */}
			<div style={{ position: 'relative', paddingLeft: '2.5rem', maxWidth: 800 }}>
				{/* Vertical line */}
				<div style={{
					position: 'absolute',
					left: 0, top: 0, bottom: 0,
					width: 1,
					background: 'linear-gradient(180deg, var(--sakura), var(--cyan), transparent)',
				}} />

				{TIMELINE.map((item, i) => (
					<div
						key={i}
						style={{
							position: 'relative',
							paddingBottom: i < TIMELINE.length - 1 ? '3.5rem' : 0,
						}}
					>
						{/* Dot */}
						<span style={{
							position: 'absolute',
							left: '-2.88rem',
							top: '0.3rem',
							width: 9, height: 9,
							borderRadius: '50%',
							background: 'var(--sakura)',
							boxShadow: '0 0 14px rgba(212,43,43,0.5)',
							display: 'inline-block',
						}} />

						<p style={{ fontSize: '0.7rem', letterSpacing: '0.3em', color: 'var(--sakura)', textTransform: 'uppercase', marginBottom: '0.4rem' }}>{item.date}</p>
						<h3 style={{ fontFamily: 'var(--font-cinzel)', fontSize: '1.1rem', fontWeight: 600, letterSpacing: '0.05em', marginBottom: '0.2rem' }}>{item.title}</h3>
						<p style={{ fontSize: '0.75rem', letterSpacing: '0.15em', color: 'var(--cyan)', marginBottom: '0.75rem', textTransform: 'uppercase' }}>{item.org}</p>
						<p style={{ fontSize: '0.9rem', lineHeight: 1.85, fontWeight: 300, color: 'rgba(255,255,255,0.5)', maxWidth: 680 }}>{item.desc}</p>
					</div>
				))}
			</div>
		</section>
	);
}
