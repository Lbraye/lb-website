'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useRef, useState, type ReactNode } from 'react';

const ENTER_DURATION = 900;
const NAV_DELAY = 650;

export function SmokeEnterLink({
	href,
	className,
	children,
}: {
	href: string;
	className?: string;
	children: ReactNode;
}) {
	const router = useRouter();
	const [active, setActive] = useState(false);
	const fired = useRef(false);

	const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
		if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
		e.preventDefault();
		if (fired.current) return;
		fired.current = true;

		const reduce =
			typeof window !== 'undefined' &&
			window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

		if (reduce) {
			router.push(href);
			return;
		}

		try {
			sessionStorage.setItem('smoke-enter', '1');
		} catch {}

		setActive(true);
		router.prefetch(href);
		window.setTimeout(() => router.push(href), NAV_DELAY);
	};

	return (
		<>
			<Link href={href} className={className} onClick={handleClick}>
				{children}
			</Link>
			{active && (
				<div
					className='smoke-overlay smoke-overlay-enter'
					aria-hidden
					style={{ animationDuration: `${ENTER_DURATION}ms` }}
				>
					<div className='smoke-puff smoke-puff-a' />
					<div className='smoke-puff smoke-puff-b' />
					<div className='smoke-puff smoke-puff-c' />
					<div className='smoke-puff smoke-puff-d' />
					<div className='smoke-veil' />
				</div>
			)}
		</>
	);
}
