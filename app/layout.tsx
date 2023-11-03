import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/header';
import ActiveSectionContextProvider from '@/context/active-section.context';
import favIcon from '@/app/favicon.ico';
import { Toaster } from 'react-hot-toast';
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Drápa',
	description: 'Icelandic metal band',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className="!scroll-smooth">
			<head>
				<link rel="icon" href="/favicon.ico" sizes="any" />
				<link
					rel="stylesheet"
					media="screen"
					href="https://fontlibrary.org//face/datalegreya"
					type="text/css"
				/>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" />
				<link
					href="https://fonts.googleapis.com/css2?family=Advent+Pro&display=swap"
					rel="stylesheet"
				/>
			</head>
			<body
				className={`${inter.className} bg-black text-white reletive pt-28 sm:pt-32 `}
			>
				<ActiveSectionContextProvider>
					<Header />
					{children}
					<Toaster position="top-right" />
				</ActiveSectionContextProvider>
			</body>
		</html>
	);
}
