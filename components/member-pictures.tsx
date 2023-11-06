'use client';

import React from 'react';
import Image from 'next/image';
import Jakob from '@/public/jakob_portrait.jpg';
import Orn from '@/public/orn_portrait.jpg';
import Saevar from '@/public/saevar_portrait.jpg';
import Tommi from '@/public/tomas_portrait.jpg';
import Halli from '@/public/halli_portrait.jpg';
import { useSectionInView } from '@/lib/hooks';

const memberPictures = [
	{
		name: 'Jakob',
		src: Jakob,
		Imageleft: 12,
		top: 0,
		opacity: 10,
		instrument: 'Guitar',
	},
	{
		name: 'Örn',
		src: Orn,
		Imageleft: 9,
		top: 0,
		opacity: 80,
		instrument: 'Drums',
	},
	{
		name: 'Sævar',
		src: Saevar,
		Imageleft: 9,
		top: 0,
		opacity: 70,
		instrument: 'Vocals',
	},
	{
		name: 'Tomas',
		src: Tommi,
		Imageleft: 9,
		top: 3,
		opacity: 50,
		instrument: 'Guitar',
	},
	{
		name: 'Halli',
		src: Halli,
		Imageleft: 2,
		top: 6,
		opacity: 70,
		instrument: 'Bass',
	},
];

export default function MemberPictures() {
	const { ref } = useSectionInView('About', 0.2);

	return (
		<section
			ref={ref}
			id="about"
			className="flex flex-wrap sm:flex-nowrap gap-2 justify-around scroll-mt-[10rem] top-[30rem] h-auto sm:h-[50rem] w-full sm:px-10 sm:gap-0"
		>
			{memberPictures.map((member) => (
				<div
					key={member.name}
					className="group flex flex-wrap sm:flex-nowrap items-center justify-center overflow-hidden relative h-[40rem] w-full sm:w-[12rem] sm:border sm:border-gray-400/40 sm:rounded-tl-full 
                    sm:rounded-tr-full sm:rounded-br-full sm:rounded-bl-full sm:hover:w-[25rem] sm:hover:rounded-tr-none sm:hover:rounded-tl-none sm:transition-all sm:duration-[500ms] ease-in-out"
				>
					<div className="absolute z-10 flex justify-center bottom-0 sm:bottom-auto font-custom w-full text-gray-400/80 sm:-rotate-90 text-8xl group-hover:opacity-0 duration-300">
						{member.name}
					</div>
					<div className="absolute z-10 flex bottom-4 sm:top-5 justify-center font-custom text-6xl opacity-0 text-gray-400/60 group-hover:opacity-100 sm:duration-[500ms]">
						{member.instrument}
					</div>
					<Image
						src={member.src}
						alt={member.name}
						style={{ maxWidth: 'none', height: 'initial' }}
						className={`opacity-30 absolute top-${member.top} -left-[${member.Imageleft}rem] w-[40rem] h-full group-hover:opacity-100 duration-500`}
					/>
				</div>
			))}
		</section>
	);
}
