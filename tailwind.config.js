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
            'accent': '#dc2626',
            'accent-light': '#ef4444',
            'accent-dark': '#b91c1c',
            'section-gray': '#f1f5f9',
            'black': '#12151E',
            'hot-pink': '#fd2d78'
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
