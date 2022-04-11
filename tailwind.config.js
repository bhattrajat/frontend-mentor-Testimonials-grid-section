const colors = require('tailwindcss/colors');
module.exports = {
  content: ['./*.html'],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      'primary-violet': 'hsl(263, 55%, 52%)',
      'light-gray-blue': 'hsl(210, 46%, 95%)',
      'dark-gray-blue': 'hsl(217, 19%, 35%)',
      'dark-black-blue': 'hsl(219, 29%, 14%)',
    },
  },
  plugins: [],
};
