/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '100': '25rem',
        '88':  '22rem',
        '120': '30rem', 
        '165': '41.25rem',
        '84' : '21rem',
      },
    },
  },
  variants: {},
  plugins: [],
}