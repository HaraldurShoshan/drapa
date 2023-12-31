'use client';
import React from 'react';
import dynamic from 'next/dynamic';
import DrapaLogo from '@/public/drapa_logo.svg';
import Image from 'next/image';
import { useSectionInView } from '@/lib/hooks';

export default function Logo() {
	const { ref } = useSectionInView('Home', 0.5);
	// const DrapaLogo = dynamic(() => import('@/public/drapa_logo.svg'));
	return (
		<section
			ref={ref}
			id="home"
			className="scroll-mt-[20rem] mb-[5rem] text-white"
		>
			{/* <DrapaLogo /> */}
			<Image
				priority
				src={DrapaLogo}
				alt="Drapa Logo"
				className="h-auto w-[20rem] sm:w-[40rem] text-white"
			/>
		</section>
	);
}
