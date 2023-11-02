import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
			boxShadow: {
				innerShadow: 'inset -120px -20px 28px -10px rgba(0, 0, 0,1)',
			},
			fontFamily: {
				custom: ['DatalegreyaThin'],
				advent: ['Advent Pro'],
			},
		},
	},
	plugins: [],
};
export default config;
