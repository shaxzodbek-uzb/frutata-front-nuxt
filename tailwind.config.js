// const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    theme: {
        extend: {
            colors: {
                primary: '#93c92b',
            }
        },
        container: {
            screens: {
                sm: "100%",
                md: "100%",
                lg: "1024px",
                xl: "1196px"
            }
        }
    },
    content: [
        'components/**/*.vue',
        'layouts/**/*.vue',
        'pages/**/*.vue',
        'plugins/**/*.js',
        'nuxt.config.js',
        'content/**/*.md'
    ]

}
