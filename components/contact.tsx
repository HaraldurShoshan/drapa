'use client';
import React from 'react';
// import SectionHeading from './section-heading';

import { useSectionInView } from '@/lib/hooks';

import { sendEmail } from '@/actions/sendEmail';

import SubmitBtn from './submit-btn';
import toast from 'react-hot-toast';

export default function Contact() {
	const { ref } = useSectionInView('Contact');

	return (
		<section
			ref={ref}
			id="contact"
			className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center scroll-mt-[8rem]"
		>
			<p className="text-gray-700 -mt-6 dark:text-white/80">
				Please contact us directly at{' '}
				<a className="underline" href="mailto:drapametal@gmail.com">
					drapametal@gmail.com
				</a>{' '}
				or through this form
			</p>
			<form
				className="mt-10 flex flex-col dark:text-black"
				action={async (formData) => {
					const { data, error } = await sendEmail(formData);
					if (error) {
						toast.error(error);
						return;
					}
					toast.success('Email sent successfully!');
				}}
			>
				<input
					type="email"
					className="h-14 px-4 rounded-lg transition-all opacity-80 focus:opacity-100 focus:outline-none"
					placeholder="Your email"
					required
					maxLength={500}
					name="senderEmail"
				/>
				<textarea
					className=" h-52 my-3 rounded-lg p-4 transition-all opacity-80 focus:opacity-100 focus:outline-none
					dark:outline-none"
					placeholder="Your message"
					required
					maxLength={5000}
					name="message"
				/>
				<SubmitBtn />
			</form>
		</section>
	);
}
