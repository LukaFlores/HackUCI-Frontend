const tailwindcss = require('tailwindcss');

module.exports = {
  plugins: [tailwindcss('./tailwind.js'), require('autoprefixer')],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',

      black: '#000',
      white: '#fff',
    },
  },
};
