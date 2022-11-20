/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      screens: {
        iphonexr: '414px'
      },
      animation: {
        'slide-in-bottom': 'slide-in-bottom 0.6s ease-out'
      },
      keyframes: {
        'slide-in-bottom': {
          '0%': {
            transform: 'translateY(100%)',
            opacity: '0'
          },
          '100%': {
            transform: 'translateY(0%)',
            opacity: '1'
          }
        }
      }
    }
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')]
}
