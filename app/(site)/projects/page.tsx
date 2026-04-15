import type { Metadata } from 'next';
import { Projects } from '@/components/sections/Projects';

export const metadata: Metadata = {
	title: 'Projects',
	description:
		'Agentic AI security workflows, CMMC network hardening playbooks, phishing simulation, IAM automation, and OSINT tooling.',
};

export default function ProjectsPage() {
	return <Projects />;
}
