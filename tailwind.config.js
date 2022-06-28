/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Courier Prime', 'OCR-A', ...defaultTheme.fontFamily.sans],
        'posts': ['Noto Sans', 'Georgia']
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
