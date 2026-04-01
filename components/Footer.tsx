export function Footer() {
	return (
		<footer
			className='footer-inner'
			style={{
				borderTop: '1px solid rgba(212,43,43,0.18)',
				position: 'relative',
				zIndex: 10,
				background: 'rgba(8,8,16,0.6)',
			}}
		>
			<span style={{ fontFamily: 'var(--font-bangers)', fontSize: '1rem', letterSpacing: '0.18em', color: 'var(--muted)' }}>
				LANDON<span style={{ color: 'var(--sakura)' }}>/</span>BRAYE
				<span style={{ color: 'var(--sakura)', marginLeft: '0.75rem', fontFamily: 'var(--font-raleway)', fontWeight: 300, fontSize: '0.85rem' }}>夜桜</span>
			</span>
			<span style={{ fontSize: '0.7rem', letterSpacing: '0.22em', color: 'rgba(255,255,255,0.2)', textTransform: 'uppercase' }}>
				情報セキュリティ — 防御 · 構築 · 革新
			</span>
			<span style={{ fontSize: '0.7rem', letterSpacing: '0.18em', color: 'rgba(255,255,255,0.2)', textTransform: 'uppercase' }}>
				© 2026 All Rights Reserved
			</span>
		</footer>
	);
}
