/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['dist/*html'],
	theme: {
		screen: {
			sm: '480px',
			md: '768px',
			lg: '976px',
			xl: '1440px',
		},
		extend: {
			colors: {
				'strong-cyan': 'hsl(171, 66%, 44%)',
				'light-blue': 'hsl(223, 100%, 69%)',
				'dark-gray-blue': 'hsl(219, 10%, 33%)',
				'grayish-blue': 'hsl(201, 11%, 66%)',
			},
			fontFamily: {
				sans: ['Bai Jamjuree', 'sans-serif'],
			},
		},
	},
	plugins: [],
};
