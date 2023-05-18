/** @type {import('tailwindcss').Config} */
export default {
  content: ['./**/*.{js,jsx}', '/index.html'],
  theme: {
    height: {
      // percentage
      '20%': '20%',
      '50%': '50%',
      '80%': '80%',
      '100%': '100%'
    },
    width: {
      // percentage
      '15%':'15%',
      '20%': '20%',
      '50%': '50%',
      '70%': '70%',
      '80%': '80%',
      '100%': '100%',
      // pixels
      '200px': '200px',
      // vw
      '100vw':'100vw'
    },
    extend: {},
  },
  plugins: [],
}

