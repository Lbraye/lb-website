import { CanvasBackground } from '@/components/CanvasBackground';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { SmokeExit } from '@/components/SmokeExit';

export default function SiteLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div className='min-h-screen flex flex-col'>
			<CanvasBackground />
			<Navbar />
			<main className='site-main flex-1' style={{ position: 'relative', zIndex: 10 }}>
				{children}
			</main>
			<Footer />
			<SmokeExit />
		</div>
	);
}
