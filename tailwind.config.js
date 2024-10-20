/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'oxford-blue': '#0b132bff',
        'space-cadet': '#1c2541ff',
        'yinmn-blue': '#3a506bff',
        'verdigris': '#5bc0beff',
        'fluorescent-cyan': '#6fffe9ff',
      },
      fontFamily: {
        'russo-one': ['"Russo One"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};