'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { links } from '@/lib/data';
import { useActiveSectionContext } from '@/context/active-section.context';
import clsx from 'clsx';

export default function Header() {
	const { activeSection, setActiveSection, setTimeOfLastClick } =
		useActiveSectionContext();

	return (
		<header className="z-[999] relative">
			<motion.div
				className="fixed top-0 rounded-none  w-full h-[6rem] sm:h-14
                bg-[#212121]  backdrop-blur-[0.3rem]"
			></motion.div>
			<nav className="flex fixed top-[0.1rem] left-1/2 h-12 -translate-x-1/2   sm:py-0">
				<ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 sm:w-[47rem] sm:flex-nowrap sm:gap-4 text-2xl text-gray-400">
					{links.map((link) => (
						<li
							key={link.hash}
							className="h-3/4 flex item-center justify-center relative "
						>
							<Link
								className={clsx(
									'flex w-full items-center font-advent justify-center px-3 py-3 hover:text-white transition ',
									{
										'text-white font-medium': activeSection === link.name,
									},
								)}
								href={link.hash}
								onClick={() => {
									setActiveSection(link.name);
									setTimeOfLastClick(Date.now());
								}}
							>
								<div className="flex flex-col items-center justify-center relative ">
									{link.name === activeSection && (
										<motion.span
											className="bg-gray-100/40 absolute top-[2.2rem] w-1 h-1 rounded-full"
											layoutId="activeSection"
											transition={{
												type: 'spring',
												stiffness: 380,
												damping: 30,
											}}
										></motion.span>
									)}
									{link.name}
								</div>
							</Link>
						</li>
					))}
				</ul>
			</nav>
		</header>
	);
}
