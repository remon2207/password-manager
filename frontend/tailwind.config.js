/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      animation: {
        'slide-in-bottom': '-translate-y-1/2'
      },
      keyframes: {
        'slide-in-bottom': {
          '0%': {
            transform: 'translateY(50%)'
          },
          '100%': {
            transform: 'translateY(0%)'
          }
        }
      }
    }
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')]
}
