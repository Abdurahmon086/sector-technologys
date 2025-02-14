import type { Config } from 'tailwindcss'

export default {
	content: ['./pages/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
	theme: {
		container: {
			center: true,
			screens: {
				DEFAULT: '1512px',
			},
			padding: {
				DEFAULT: '15px',
			},
		},
		extend: {
			colors: {
				background: 'var(--background)',
				foreground: 'var(--foreground)',
				primery: 'var(--primery)',
				textColor: 'var( --text-color)',
				textColorWhite: 'var(--text-color-white)',
			},
		},
	},
	plugins: [],
} satisfies Config
