/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        custom1: '#7F77E0',
        custom2: '#1C1C1C',
      },
    },
  },
  plugins: [],
};
