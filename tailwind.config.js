// const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    mode: 'jit',
    theme: {
        extend: {
            colors: {
                Green: '#93C92B',
                DarkGreen: '#436600',
                GreenFoot: '#689E00',
                Grey: '#585858',
                Green26: 'rgba(147, 201, 43, 0.26)',
                GreenFrom: 'rgba(175, 234, 63, 1)',
                GreenTo: 'rgba(219, 255, 151, 1)',
                YellowFrom: 'rgba(255, 242, 194, 0.7)',
                YellowTo: 'rgba(255, 252, 241, 0.7)',
                GreenFrom70: 'rgba(220, 244, 211, 0.7)',
                GreenTo70: 'rgba(245, 250, 243, 0.7)',
                BGproducts: '#FAFAFA',
                Red: '#D72323',
                GreenLight: '#f5fff1',
                GreyLight: '#212529',
                Grey27: '#828282',
                Grey28: '#e9e9e9',

            },
            minHeight: {
                100: '6.25rem',
            },
            maxWidth: {
                129: '8.063rem',
                214: '13.375rem',
                430: '26.875rem',
                592: '37rem',
            },
            fontSize: {
                13: '0.813rem',
                15: '0.938rem',
                28: '1.75rem',
                32: '2.5rem',
                50: '3.125rem',
                100: '6.25rem',
            },
            lineHeight: {
                14: '0.875rem',
                17: '1.063rem',
                28: '1.75rem',
                50: '3.125rem',
                60: '3.6rem',
                100: '6.25rem',
            },
            spacing: {
                18: '1.125rem',
                60: '3.75rem',
                100: '6.25rem',
                150: '9.375rem',
                176: '11rem',
                270: '16.875rem',
                280: '17.5rem',
                356: '22.25rem',
                540: '33.75rem',
                580: '36.25rem',
                600: '37.5rem',
            },
            borderRadius: {
                20: '1.25rem',
                30: '1.875rem',
            },
            scale: {
              '125': '1.25',
            }
        },
        colors: {
            transparent: 'transparent',
            current: 'current',
            black: '#000',
            white: '#fff',
            primary: {
                900: '#93c92b',
                500: '#fff2c2',
                300: '#bfe6ba',
                200: '#efffed',
                100: '#fffcf1',
            },
            grey: {
                900: '#585858',
                500: '#828282',
                200: '#e9e9e9',
                100: '#fafafa',
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
