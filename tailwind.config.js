/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			animation: {
				scaleIn: {
					['-webkit-animation']:
						'scale-in-bl 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) both',
					animation:
						'scale-in-bl 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) both',
				},
				scaleOut: {
					['-webkit-animation']:
						'scale-out-bl 0.2s cubic-bezier(0.55, 0.085, 0.68, 0.53) both',
					animation:
						'scale-out-bl 0.2s cubic-bezier(0.55, 0.085, 0.68, 0.53) both',
				},
			},
		},
	},
	plugins: [],
};
