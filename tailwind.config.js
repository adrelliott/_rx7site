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
            'black': '#12151E',
            'hot-pink': '#fd2d78'
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
        }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
  important: true
}
