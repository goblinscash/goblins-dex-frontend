// postcss.config.js

module.exports = {
    plugins: [
      require('postcss-prefix-selector')({
        prefix: 'body.newDesign',
        transform: function (prefix, selector, prefixedSelector) {
          if (selector.startsWith('html') || selector.startsWith('body')) {
            return selector.replace(/^html|body/, prefix);
          }
          return prefixedSelector;
        },
      }),
      require('tailwindcss'),
      require('autoprefixer'),
    ],
  }
  