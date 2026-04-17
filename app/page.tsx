import Link from 'next/link';
import type { Metadata } from 'next';
import { LandingVideo } from '@/components/LandingVideo';
import { SmokeEnterLink } from '@/components/SmokeEnterLink';

export const metadata: Metadata = {
	title: 'LANDON BRAYE — 夜桜',
	description: 'Cybersecurity Engineer · Tampa, FL · Veteran. Enter the panel.',
};

export default function Landing() {
	return (
		<div className='landing-root'>
			<LandingVideo />
			<div className='landing-overlay' aria-hidden />
			<div className='landing-vignette' aria-hidden />
			<div className='landing-grain' aria-hidden />

			<Link href='/about' className='landing-mark' aria-label='Landon Braye — home'>
				<span>
					LANDON<span className='landing-mark-slash'>/</span>BRAYE
				</span>
				<span className='landing-mark-kanji'>夜桜</span>
			</Link>

			<Link href='/about' className='landing-skip'>
				Skip Intro →
			</Link>

			<main className='landing-content'>
				<p className='landing-kanji-top'>情 報 セ キ ュ リ テ ィ</p>
				<h1 className='landing-name'>
					<span>LANDON</span>
					<br />
					<span className='landing-name-stroke'>BRAYE</span>
				</h1>
				<p className='landing-kanji-bottom'>守 護 者</p>

				<div className='landing-tag'>
					<span>Cybersecurity Engineer</span>
					<span className='landing-tag-sep'>·</span>
					<span>Tampa, FL</span>
					<span className='landing-tag-sep'>·</span>
					<span>USAF Veteran</span>
					<span className='landing-tag-sep'>·</span>
					<span>Secret Clearance</span>
				</div>

				<div className='landing-cta-row'>
					<SmokeEnterLink href='/about' className='mg-btn mg-btn-primary'>
						<span className='shimmer' aria-hidden />
						Enter The Panel
					</SmokeEnterLink>
					<Link href='/contact' className='mg-btn mg-btn-ghost'>
						Make Contact
					</Link>
				</div>
			</main>

			<div className='landing-scroll-cue' aria-hidden>
				<span>入口</span>
			</div>
		</div>
	);
}
