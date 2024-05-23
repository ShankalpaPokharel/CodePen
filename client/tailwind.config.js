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
        "opensans": ["Open Sans",...defaultTheme.fontFamily.sans],
        "monos":["Roboto Mono", ...defaultTheme.fontFamily.sans]
      },
      colors:{
        primary:"white",
        "primary-dark":"#C7C9D3",
        "green-bt":"#47CF73",
        "green-bt-h":"#248C46"
      }
    },
  },
  plugins: [],
}