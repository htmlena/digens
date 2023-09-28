/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        'darkBackground': '#0D0F16' 
      }
    },
  },
  plugins: [],
}

