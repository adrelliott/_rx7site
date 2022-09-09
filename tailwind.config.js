const { line } = require('laravel-mix/src/Log')

module.exports = {
  content: [
    './resources/**/*.antlers.html',
    './resources/**/*.blade.php',
    './content/**/*.md'
  ],
  theme: {
    extend: {
        colors: {
          oblong: {
            'base': '#374785',
            'base-light': '#4b6891',
            'base-dark': '#324e78',
            'accent': '#fd2d78',
            'accent-light': '#fd4286',
            'accent-dark': '#e4296c',
            'gray': '#f1f5f9',
            'black': '#12151E',
            'hot-pink': '#fd2d78',
            'hot-pink-light': '#fd2d78'
          },
        },
        fontFamily: {
            display: "var(--font-display)",
            body: "var(--font-body)",
        },
        typography: {
          DEFAULT: {
            css: {
              color: '#333',
              "ul > li > p": {
                "margin-top": "0px",
                "margin-bottom": "0px",
              },
            },
          },
        },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
  important: true
}
