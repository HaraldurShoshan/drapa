'use client';
import React from 'react';
import dynamic from 'next/dynamic';
import DrapaLogo from '@/public/drapa_logo.svg';
import DrapaLogoNewBrons from '@/public/Drapa_logo_new_brons.png';
import DrapaLogoNewWhite from '@/public/DrapaCLEAN_WHITE.svg';
import DrapaLogoNewBronsSkraut from '@/public/Drapa_logo_brons_skraut.svg';
import Angantyr from '@/public/angantyr_noLogoMix.png';
import Image from 'next/image';
import { useSectionInView } from '@/lib/hooks';

export default function Logo() {
	const { ref } = useSectionInView('Home', 0.5);
	// const DrapaLogo = dynamic(() => import('@/public/drapa_logo.svg'));
	return (
		<section
			ref={ref}
			id="home"
			className="scroll-mt-[20rem] mb-[5rem] text-white "
		>
			{/* <DrapaLogo /> */}
			{/* <Image
				priority
				src={DrapaLogoNewWhite}
				alt="Drapa Logo"
				className="h-auto w-[20rem] sm:w-[80rem] md:w-[80rem] text-white sm:mt-52 md:mt-[36rem] opacity-60 z-50"
			/> */}
			<Image src={Angantyr} alt="Angantyr" className="h-auto sm:w-[80rem]" />
		</section>
	);
}
