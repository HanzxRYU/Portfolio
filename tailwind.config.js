/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily:{
        "OpenSans": "Open Sans",
        "Helvetica Neue": "Helvetica Neue",
      },
      backgroundImage:{
        "Stars" : 'url../public/Stars.jpeg'
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

