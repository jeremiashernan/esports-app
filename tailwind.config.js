module.exports = {
  purge: ['./pages/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    container: {
      center: true
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1200px',
      '2xl': '1520px'
    },
    extend: {
      skew: {
        20: '-20deg'
      },
      fontFamily: {
        lato: ['Lato', 'sans-serif'],
        markpro: ['"Mark Pro"', 'sans-serif']
      },
      colors: {
        'pugb-gray': {
          900: '#101011',
          800: '#171719',
          700: '#282a2e',
          650: '#2e2e2e',
          600: '#333334',
          550: '#39393c',
          500: '#585859',
          450: '#646466',
          400: '#6e6e70',
          350: '#858587',
          300: '#969699',
          250: '#dfdfdf',
          200: '#e5e5e5',
          150: '#e9e9ea',
          100: '#cecece',
          50: '#ececec',
          0: '#f2f2f2'
        },
        'pugb-red': {
          500: '#a00019',
          450: '#bf001e',
          400: '#d00020',
          300: '#df0023',
          200: '#f70027'
        }
      },
      transitionDuration: {
        1500: '1500ms',
        2000: '2000ms',
        8000: '8000ms'
      },
      transitionProperty: {
        width: 'width'
      }
    }
  },
  plugins: [require('@tailwindcss/aspect-ratio')]
}
