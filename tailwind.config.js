/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Quicksand', 'ui-sans-serif', 'system-ui'],
      },
    },
  },
  plugins: [],
};
