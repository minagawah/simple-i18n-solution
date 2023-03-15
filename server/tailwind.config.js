const TW_COLORS = require('../tw.colors.js');

module.exports = {
  content: ['./views/**/*.{html,njk,js}'],
  theme: {
    // extend: {},
    extend: {
      colors: {
        ...TW_COLORS,
      },
    },
  },
  plugins: [],
};
