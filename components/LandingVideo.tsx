'use client';

import { useEffect, useRef, useState } from 'react';

const CLIPS = [
	'/landing/clip-01.mp4',
	'/landing/clip-02.mp4',
	'/landing/clip-03.mp4',
	'/landing/clip-04.mp4',
];

const CROSSFADE_MS = 1200;
const TAIL_ADVANCE_SEC = 1.4;

export function LandingVideo() {
	const aRef = useRef<HTMLVideoElement>(null);
	const bRef = useRef<HTMLVideoElement>(null);
	const [active, setActive] = useState<'a' | 'b'>('a');
	const [idx, setIdx] = useState(0);
	const [hasVideo, setHasVideo] = useState(false);
	const availableRef = useRef<string[]>([]);

	useEffect(() => {
		let cancelled = false;
		(async () => {
			const checks = await Promise.all(
				CLIPS.map(async (src) => {
					try {
						const res = await fetch(src, { method: 'HEAD' });
						return res.ok ? src : null;
					} catch {
						return null;
					}
				}),
			);
			if (cancelled) return;
			const found = checks.filter((c): c is string => c !== null);
			availableRef.current = found;
			setHasVideo(found.length > 0);
		})();
		return () => {
			cancelled = true;
		};
	}, []);

	useEffect(() => {
		if (!hasVideo) return;
		const list = availableRef.current;
		if (list.length === 0) return;
		const a = aRef.current;
		const b = bRef.current;
		if (!a || !b) return;

		a.src = list[0];
		a.load();
		void a.play().catch(() => {});

		if (list.length > 1) {
			b.src = list[1 % list.length];
			b.load();
		}
	}, [hasVideo]);

	useEffect(() => {
		if (!hasVideo) return;
		const list = availableRef.current;
		if (list.length < 2) return;

		const current = active === 'a' ? aRef.current : bRef.current;
		const next = active === 'a' ? bRef.current : aRef.current;
		if (!current || !next) return;

		const handleTimeUpdate = () => {
			if (!current.duration || Number.isNaN(current.duration)) return;
			if (current.duration - current.currentTime <= TAIL_ADVANCE_SEC) {
				current.removeEventListener('timeupdate', handleTimeUpdate);
				const nextIdx = (idx + 1) % list.length;
				next.src = list[nextIdx];
				next.load();
				const start = () => {
					void next.play().catch(() => {});
					setActive(active === 'a' ? 'b' : 'a');
					setIdx(nextIdx);
				};
				if (next.readyState >= 3) start();
				else next.addEventListener('canplay', start, { once: true });
			}
		};

		current.addEventListener('timeupdate', handleTimeUpdate);
		return () => current.removeEventListener('timeupdate', handleTimeUpdate);
	}, [active, idx, hasVideo]);

	useEffect(() => {
		const onVisibility = () => {
			[aRef.current, bRef.current].forEach((v) => {
				if (!v) return;
				if (document.hidden) v.pause();
				else void v.play().catch(() => {});
			});
		};
		document.addEventListener('visibilitychange', onVisibility);
		return () => document.removeEventListener('visibilitychange', onVisibility);
	}, []);

	return (
		<>
			{!hasVideo && <div className='landing-fallback' aria-hidden />}
			<video
				ref={aRef}
				className='landing-video'
				data-active={hasVideo && active === 'a'}
				muted
				loop
				playsInline
				autoPlay
				preload='auto'
				aria-hidden
				style={{ transitionDuration: `${CROSSFADE_MS}ms` }}
			/>
			<video
				ref={bRef}
				className='landing-video'
				data-active={hasVideo && active === 'b'}
				muted
				loop
				playsInline
				preload='auto'
				aria-hidden
				style={{ transitionDuration: `${CROSSFADE_MS}ms` }}
			/>
		</>
	);
}
