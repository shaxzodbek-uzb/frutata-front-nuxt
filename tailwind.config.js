// const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    theme: {
        extend: {
            colors: {
                primary: '#93c92b',
                lightGreen: '#fff2c2',
                ultraLightGreen: '#fffcf1',
            },
            lineHeight: {
                '11': '3.75rem',
            },
            zIndex: {
                '-10': -10,
            },
            maxWidth: {
                '1/2': '50%',
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
