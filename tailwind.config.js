/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          light: '#d4af37',
          DEFAULT: '#c5a028',
          dark: '#a68a20',
        },
        burgundy: {
          light: '#800020',
          DEFAULT: '#600018',
          dark: '#400010',
        },
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
