// const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    theme: {
        extend: {

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
        colors: {
            transparent: 'transparent',
            current: 'current',
            black: '#000',
            white: '#fff',
            // 'bg-primary-900'
            // 'bg-red-text'
            // 'text-red-text'
            primary: {
                900: '#93c92b',
                500: '#fff2c2',
                100: '#fffcf1',
            },
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
