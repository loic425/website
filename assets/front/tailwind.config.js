const Encore = require('@symfony/webpack-encore');
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './public/**/*.html',
  ],
  theme: {
    extend: {
      maxWidth: {
        'prose': '70ch',
      },
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
        poppins: ['Poppins', ...defaultTheme.fontFamily.sans]
      },
      colors: {
        'navy-blue': '#232946',
        'sky-blue': '#36406d',
        pink: '#eebbc3',
        white: '#fffffe',
        blue: '#b8c1ec',
        'dark-blue': '#a1a9cf',
        'dark-pink': '#c7939b',
      },
    },
  },
  variants: {},
  corePlugins: {},
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
  purge: Encore.isProduction(),
}
