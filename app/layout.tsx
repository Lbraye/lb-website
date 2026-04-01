import type { Metadata } from 'next';
import { Bangers, Cinzel, Raleway } from 'next/font/google';
import './globals.css';

const bangers = Bangers({
	weight: '400',
	subsets: ['latin'],
	variable: '--font-bangers',
});

const cinzel = Cinzel({
	weight: ['400', '600', '700'],
	subsets: ['latin'],
	variable: '--font-cinzel',
});

const raleway = Raleway({
	weight: ['300', '400', '500', '700'],
	subsets: ['latin'],
	variable: '--font-raleway',
});

export const metadata: Metadata = {
	title: 'LANDON BRAYE — Cybersecurity Engineer',
	description: 'Cybersecurity Engineer with 8+ years in network defense, vulnerability management, and compliance. Veteran — Secret Clearance. Tampa, FL.',
	icons: {
		icon: '/icon.svg',
		apple: '/icon.svg',
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang='en'
			className={`${bangers.variable} ${cinzel.variable} ${raleway.variable} h-full antialiased`}
		>
			<body className='min-h-full flex flex-col'>{children}</body>
		</html>
	);
}
