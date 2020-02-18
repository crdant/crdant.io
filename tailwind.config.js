const { colors } = require('tailwindcss/defaultTheme');

module.exports = {
  theme: {
    fontFamily: {
      display: ['"Luckiest Guy"', 'sans-serif' ],
    },
    colors: {
      ...colors,
      primary: colors.red['800'],
      secondary: colors.blue['600'],
      neutral: colors.gray,
      black: '#141414',
      white: '#FFF',
    },
    extend: {},
  },
  variants: {},
  plugins: [],
};
