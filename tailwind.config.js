/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
// const colors = require('tailwindcss/colors');

module.exports = {
  darkMode: 'class',
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors: {
        pryBlue: '#007BFF',
        secBlue: '#0056b3',
        lightBlue: '#ADD8E6',
        newGold: '#b8a67d',
        freshGray: '#808080',
        footerGray: '#333333',
        darkBlue: 'hsl(228, 39%, 23%)',
        darkGrayishBlue: 'hsl(227, 12%, 61%)',
        veryDarkBlue: 'hsl(233, 12%, 13%)',
        veryLightGray: 'hsl(0, 0%, 98%)',
        dark: '#00172d',
      },
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans]
      },
      // aspectRatio: {
      //   '4/3': "4 / 3",
      // }
    },
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
    require('tailwindcss-dark-mode')(),
  ],
}

