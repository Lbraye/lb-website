const SKILLS = [
	'Kali Linux',
	'Metasploit',
	'Rapid7 InsightVM',
	'Rapid7 InsightIDR',
	'Tenable Nessus',
	'SentinelOne',
	'Nmap',
	'KnowBe4',
	'Cisco Meraki',
	'Cisco Umbrella',
	'Microsoft Azure',
	'AWS Cloud',
	'CMMC',
	'PCI DSS',
	'NIST / RMF',
	'Powershell',
	'VMware',
	'Mimecast',
	'SonicWall',
	'Incident Response',
];

export function Skills() {
	return (
		<div
			id='skills'
			style={{
				borderTop: '1px solid rgba(212,43,43,0.18)',
				borderBottom: '1px solid rgba(212,43,43,0.18)',
				overflow: 'hidden',
				whiteSpace: 'nowrap',
				position: 'relative',
				zIndex: 10,
				background: 'rgba(8,8,16,0.4)',
				maxWidth: '100vw',
			}}
		>
			<div style={{
				display: 'flex',
				width: 'max-content',
				animation: 'ticker 30s linear infinite',
			}}>
				{[...SKILLS, ...SKILLS].map((skill, i) => (
					<div
						key={i}
						style={{
							padding: '0.9rem 2rem',
							fontFamily: 'var(--font-bangers)',
							fontSize: '1.25rem',
							letterSpacing: '0.22em',
							borderRight: '1px solid rgba(212,43,43,0.15)',
							display: 'flex',
							alignItems: 'center',
							gap: '0.9rem',
							textTransform: 'uppercase',
							color: 'var(--muted)',
						}}
					>
						<span style={{ color: 'var(--sakura)' }}>▶</span>
						{skill}
					</div>
				))}
			</div>
		</div>
	);
}
