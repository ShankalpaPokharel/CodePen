/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')


export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'lato':["Lato", ...defaultTheme.fontFamily.sans],
        "opensans": ["Open Sans",...defaultTheme.fontFamily.sans]
      }
    },
  },
  plugins: [],
}