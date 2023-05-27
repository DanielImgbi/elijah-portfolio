/** @type {import('tailwindcss').Config} */
export default {
  content: ['./**/*.{js,jsx}', '/index.html'],
  theme: {
    extend:{
     spacing: {
        '15%':'15%',
        '20%': '20%',
        '50%': '50%',
        '70%': '70%',
      },

    }
  },
  plugins: [],
}

