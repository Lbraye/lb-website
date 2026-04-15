import type { Metadata } from 'next';
import { Contact } from '@/components/sections/Contact';

export const metadata: Metadata = {
	title: 'Contact',
	description:
		'Open a channel. Available for security engineering roles, consulting engagements, and compliance projects.',
};

export default function ContactPage() {
	return <Contact />;
}
