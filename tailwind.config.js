/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4361ee',
        'primary-dark': '#3a56d4',
        secondary: '#3f37c9',
        accent: '#4cc9f0',
      },
    },
  },
  plugins: [],
}
