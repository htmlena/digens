/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        'darkBackground': '#0D0F16',
        'textWhite': '#FFFFFF',
        'textMain': '#FF455B',
        'textOnDark': '#989CAC'
      },
      fontFamily: {
        'mulish': ['Mulish', 'sans-serif'],
        'raleway': ['Raleway', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

