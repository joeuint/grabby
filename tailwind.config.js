import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        'main': ['Geologica', ...defaultTheme.fontFamily.sans]
      },
      colors: {
        'dark': {
          100: '#1d003f',
          200: '#170033',
          300: '#0b0019',
          400: '#07000f'
        }
      }
    },
  },
  plugins: [],
}

