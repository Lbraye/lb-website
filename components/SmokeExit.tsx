'use client';

import { useEffect, useState, useSyncExternalStore } from 'react';

const EXIT_DURATION = 1100;

const subscribe = () => () => {};
const getSnapshot = () => {
	try {
		return sessionStorage.getItem('smoke-enter') === '1' ? 'on' : 'off';
	} catch {
		return 'off';
	}
};
const getServerSnapshot = () => 'off';

export function SmokeExit() {
	const armed = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot) === 'on';
	const [dismissed, setDismissed] = useState(false);

	useEffect(() => {
		if (!armed) return;
		try {
			sessionStorage.removeItem('smoke-enter');
		} catch {}
		const t = window.setTimeout(() => setDismissed(true), EXIT_DURATION + 50);
		return () => window.clearTimeout(t);
	}, [armed]);

	if (!armed || dismissed) return null;
	return (
		<div
			className='smoke-overlay smoke-overlay-exit'
			aria-hidden
			style={{ animationDuration: `${EXIT_DURATION}ms` }}
		>
			<div className='smoke-puff smoke-puff-a' />
			<div className='smoke-puff smoke-puff-b' />
			<div className='smoke-puff smoke-puff-c' />
			<div className='smoke-puff smoke-puff-d' />
			<div className='smoke-veil' />
		</div>
	);
}
