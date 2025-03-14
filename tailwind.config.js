/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/*.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'landing': "url('./assets/pictures/landing-old.jpg')",
        'WA': "url('./assets/pictures/WA.png')",
        'PCT': "url('./assets/pictures/PCT.png')",
        'BANK': "url('./assets/pictures/BANK.png')",
        'OKS': "url('./assets/pictures/OKS.png')",
        'PAT': "url('./assets/pictures/PAT.png')",
        'SP': "url('./assets/pictures/SP.png')",
        'lemon': "url('./assets/pictures/lemon.jpg')",
        'abstract': "url('./assets/pictures/abstract.jpg')",
        'lemoncoconut': "url('./assets/pictures/lemon_coconut.jpg')",
        'arrow': "url('./assets/pictures/arrow.jpg')",
        'roll': "url('./assets/pictures/billboard.jpg')",
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

