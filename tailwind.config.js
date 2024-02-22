/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/*.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'landing': "url('./assets/pictures/landing.jpg')",
        'LH': "url('./assets/pictures/LH.png')",
        'GF': "url('./assets/pictures/GF.png')",
        'leaves': "url('./assets/pictures/leaves.jpg')",
      },
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
        'afacad':['Afacad', 'sans-serif'],
        'playfair':['Playfair Display', 'serif'],
        'opensans':['Open Sans', 'sans-serif'],
        'roboto':['Roboto','sans-serif']
      },
    },
  },
  plugins: [],
}

