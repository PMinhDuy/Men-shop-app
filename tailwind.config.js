/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts,tsx}'],
  important: true,
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary-color)'
      }
    },
  },
  plugins: [],
}

