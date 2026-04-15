import type { Metadata } from 'next';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Skills } from '@/components/sections/Skills';

export const metadata: Metadata = {
	title: 'About',
	description:
		'Cybersecurity Engineer with 8+ years in network defense, vulnerability management, and compliance. Veteran — Secret Clearance. Tampa, FL.',
};

export default function AboutPage() {
	return (
		<>
			<Hero />
			<Skills />
			<About />
		</>
	);
}
