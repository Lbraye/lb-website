'use client';

import { useEffect, useRef } from 'react';

export function CanvasBackground() {
	const starsRef = useRef<HTMLCanvasElement>(null);
	const petalsRef = useRef<HTMLCanvasElement>(null);
	const animRef = useRef<number>(0);

	useEffect(() => {
		const sc = starsRef.current;
		const pc = petalsRef.current;
		if (!sc || !pc) return;

		const sctx = sc.getContext('2d')!;
		const pctx = pc.getContext('2d')!;

		function resize() {
			sc!.width = window.innerWidth;
			sc!.height = window.innerHeight;
			pc!.width = window.innerWidth;
			pc!.height = window.innerHeight;
			drawStars();
		}

		function drawStars() {
			sctx.clearRect(0, 0, sc!.width, sc!.height);
			for (let i = 0; i < 220; i++) {
				const x = Math.random() * sc!.width;
				const y = Math.random() * sc!.height;
				const r = Math.random() * 1.1;
				sctx.beginPath();
				sctx.arc(x, y, r, 0, Math.PI * 2);
				sctx.fillStyle = `rgba(255,255,255,${Math.random() * 0.55 + 0.08})`;
				sctx.fill();
			}
		}

		const petals = Array.from({ length: 30 }, () => ({
			x: Math.random() * window.innerWidth,
			y: Math.random() * window.innerHeight - window.innerHeight,
			size: Math.random() * 7 + 3,
			speed: Math.random() * 1.1 + 0.35,
			drift: (Math.random() - 0.5) * 0.55,
			rot: Math.random() * Math.PI * 2,
			rotSpeed: (Math.random() - 0.5) * 0.025,
			alpha: Math.random() * 0.35 + 0.5,
		}));

		function drawPetal(ctx: CanvasRenderingContext2D, x: number, y: number, size: number, rot: number, alpha: number) {
			ctx.save();
			ctx.translate(x, y);
			ctx.rotate(rot);
			ctx.beginPath();
			ctx.ellipse(0, 0, size, size * 0.5, 0, 0, Math.PI * 2);
			ctx.fillStyle = `rgba(212, 43, 43, ${alpha})`;
			ctx.fill();
			ctx.restore();
		}

		function animPetals() {
			pctx.clearRect(0, 0, pc!.width, pc!.height);
			petals.forEach(p => {
				drawPetal(pctx, p.x, p.y, p.size, p.rot, p.alpha);
				p.y += p.speed;
				p.x += p.drift;
				p.rot += p.rotSpeed;
				if (p.y > pc!.height + 20) {
					p.y = -20;
					p.x = Math.random() * pc!.width;
				}
			});
			animRef.current = requestAnimationFrame(animPetals);
		}

		resize();
		window.addEventListener('resize', resize);
		animPetals();

		return () => {
			window.removeEventListener('resize', resize);
			cancelAnimationFrame(animRef.current);
		};
	}, []);

	return (
		<>
			{/* Ambient glow orbs */}
			<div
				style={{
					position: 'fixed', borderRadius: '50%', filter: 'blur(130px)',
					pointerEvents: 'none', zIndex: 1,
					width: 600, height: 600, top: -200, left: -200,
					background: 'rgba(126,232,250,0.055)',
				}}
			/>
			<div
				style={{
					position: 'fixed', borderRadius: '50%', filter: 'blur(130px)',
					pointerEvents: 'none', zIndex: 1,
					width: 500, height: 500, bottom: '15%', right: -120,
					background: 'rgba(212,43,43,0.065)',
				}}
			/>
			<div
				style={{
					position: 'fixed', borderRadius: '50%', filter: 'blur(100px)',
					pointerEvents: 'none', zIndex: 1,
					width: 280, height: 280, top: '45%', left: '38%',
					background: 'rgba(126,232,250,0.035)',
				}}
			/>
			<canvas
				ref={starsRef}
				style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none' }}
			/>
			<canvas
				ref={petalsRef}
				style={{ position: 'fixed', inset: 0, zIndex: 2, pointerEvents: 'none' }}
			/>
		</>
	);
}
