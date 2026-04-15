import type { Metadata } from 'next';
import { Services } from '@/components/sections/Services';

export const metadata: Metadata = {
	title: 'Services',
	description:
		'Vulnerability management, GRC, incident response, network defense, penetration testing, and security awareness training.',
};

export default function ServicesPage() {
	return <Services />;
}
