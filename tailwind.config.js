// const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    theme: {
        extend: {
            fontSize:{
                '4x2': '2.50rem',
            },
            colors: {
                primary: '#93c92b',
                lightGreen: '#fff2c2',
                ultraLightGreen: '#fffcf1',
                lime200: '#d9f99d',
                lime500: '#84cc16',
                lime600: '#65a30d',
                amber200: '#fde68a',
                amber100: '#fef3c7',
                'red-text': '#d72323',
                'alert-lime': '#f5fff1',
            },
            lineHeight: {
                '2.5': '2.50rem',
                '11': '3.75rem',
                '14': '3.5rem',
                '15': '3.75rem',
                '16': '4rem',
            },
            zIndex: {
                '-10': -10,
            },
            maxWidth: {
                '1/2': '50%',
            },
            padding: {
                '21px': '21px',
                '121px': '121px'
            },
            width: {
              '180px': '180px',
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
