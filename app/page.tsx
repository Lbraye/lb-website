import { CanvasBackground } from '@/components/CanvasBackground';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Hero } from '@/components/sections/Hero';
import { Skills } from '@/components/sections/Skills';
import { About } from '@/components/sections/About';
import { Services } from '@/components/sections/Services';
import { Projects } from '@/components/sections/Projects';
import { Experience } from '@/components/sections/Experience';
import { Contact } from '@/components/sections/Contact';

export default function Home() {
	return (
		<>
			<CanvasBackground />
			<Navbar />
			<main className='site-main' style={{ position: 'relative', zIndex: 10 }}>
				<Hero />
				<Skills />
				<About />
				<Services />
				<Projects />
				<Experience />
				<Contact />
			</main>
			<Footer />
		</>
	);
}
