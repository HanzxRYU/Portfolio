/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        "OpenSans": "Open Sans",
      },
      backgroundImage:{
        "Stars" : 'url../public/Stars.jpeg'
      }
    },
  },
  plugins: [],
}

