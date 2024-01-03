/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				// Primary
				'light-red': 'hsl(356, 100%, 66%)',
				'very-light-red': 'hsl(355, 100%, 74%)',
				'very-dark-blue': 'hsl(208, 49%, 24%)',

				// Neutral
				'white': 'hsl(0, 0%, 100%)',
				'grayish-blue': 'hsl(240, 2%, 79%)',
				'very-dark-grayish-blue': 'hsl(207, 13%, 34%)',
				'very-dark-black-blue': 'hsl(240, 10%, 16%)',

				// Gradient
				'very-light-red-gradient': 'hsl(13, 100%, 72%)',
				'light-red-gradient': 'hsl(353, 100%, 62%)',
				'light-red-gradient-body': 'hsl(237, 17%, 21%)',
				'very-dark-desaturated-blue-gradient': 'hsl(237, 23%, 32%)',
			},
			fontFamily: {
				Overpass: "'Overpass', sans-serif",
				Ubuntu: "'Ubuntu', sans-serif",
			},
		},
	},
	plugins: [],
};

