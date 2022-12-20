/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        xxs: ['0.6rem', { lineHeight: '16px' }]
      },
      colors: {
        blue: {
          nav: '#6487c7',
          header: '#475e88',
          hover: '#dcedf5',
        },
        yellow: {
          column: '#fdf8e5'
        },
        green: {
          checked: '#74b666'
        }
      }
    },
  },
  plugins: [],
}