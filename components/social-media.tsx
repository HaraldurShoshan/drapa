'use client';
import { useSectionInView } from '@/lib/hooks';
import React from 'react';

import { FaFacebook, FaInstagram, FaSpotify, FaYoutube } from 'react-icons/fa';

export default function SocialMedia() {
	const { ref } = useSectionInView('Social Media', 0.5);
	return (
		<section
			ref={ref}
			id="socialMedia"
			className="flex items-center justify-center flex-col scroll-mt-10 mb-[12rem]"
		>
			<iframe
				className="aspect-w-16 aspect-h-9 w-full sm:w-[640px] sm:h-[390px] mt-[5rem] mb-8"
				src="https://www.youtube.com/embed/5HWs1u6J0oM?si=QIGQoL9iBvQ9dQow"
				title="YouTube video player"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
			></iframe>
			<div className="flex justify-between w-72">
				<a
					href="https://www.facebook.com/drapa.music"
					target="_blank"
					className="cursor-pointer hover:scale-[1.1]"
				>
					<FaFacebook className="text-4xl text-gray-500" />
				</a>
				<a
					href="https://www.instagram.com/drapa.music/"
					target="_blank"
					className="cursor-pointer hover:scale-[1.1]"
				>
					<FaInstagram className="text-4xl text-gray-500" />
				</a>
				<a
					href="https://open.spotify.com/artist/6AVM9rg36bwti89n0X7qNw?si=-G5lu-tsSBe4TQiEwNy_UA"
					target="_blank"
					className="cursor-pointer hover:scale-[1.1]"
				>
					<FaSpotify className="text-4xl text-gray-500" />
				</a>
				<a
					href="https://www.youtube.com/@DrapaMetal"
					target="_blank"
					className="cursor-pointer hover:scale-[1.1]"
				>
					<FaYoutube className="text-4xl text-gray-500" />
				</a>
			</div>
		</section>
	);
}
