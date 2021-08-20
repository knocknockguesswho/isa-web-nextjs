const tailwindcss = require('tailwindcss');
tailwindcss('./tailwind.config.js');
module.exports = {
  plugins: {
    'postcss-nested': {},
    tailwindcss: {},
    autoprefixer: {}
  }
};
