/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    backgroundSize: {
      'auto': 'auto',
      'cover': 'cover',
      'contain': 'contain',
      '1/2': '50%',
      '16': '4rem',
    },
    animation: {
      'slideLeft': 'slideLeft 1s ease infinite',
    },
    keyframes: {
      slideLeft: {
        '0%, 100%': { transform: 'translateX(14px)' },
        '50%': { transform: 'translateX(10px)' },
      }
    }
  },
  plugins: [],
}