/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Meiryo', 'MS PGothic', 'Hiragino Kaku Gothic ProN', 'Hiragino Sans', 'sans-serif'],
      },
      colors: {
        primary: '#333',
        secondary: '#666',
        light: '#f5f5f5',
      },
    },
  },
  plugins: [],
}

