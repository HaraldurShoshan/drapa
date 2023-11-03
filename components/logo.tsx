'use client';
import React from 'react';
import DrapaLogo from '@/public/drapa_logo.svg';
import { useSectionInView } from '@/lib/hooks';

export default function Logo() {
	const { ref } = useSectionInView('Home', 0.5);
	return (
		<section ref={ref} id="home" className="scroll-mt-[20rem] mb-[5rem]">
			<DrapaLogo className="h-auto w-[20rem] sm:w-[40rem] text-white/60" />
		</section>
	);
}
