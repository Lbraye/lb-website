import type { Metadata } from 'next';
import { Experience } from '@/components/sections/Experience';

export const metadata: Metadata = {
	title: 'Experience',
	description:
		'Field history — Air Force to SOFWERX. 8+ years across Information Security Engineering, vulnerability management, and systems engineering.',
};

export default function ExperiencePage() {
	return <Experience />;
}
