/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    colors: {
      background: 'white',
      'on-background': '#666666',
      'background-variant': '#fafafa',
      primary: '#0070F3',
      'on-primary': 'white',
      outline: '#EAEAEA',
      placeholder: '#8993A4',
      dark: 'black',
      highlight: '#79FFE1',
      error: 'red',
      'on-error': 'white',
      warn: '#fff4e5',
      'on-warn': '#663c00',
    },
    borderColor: {
      DEFAULT: '#EAEAEA',
      dark: 'black',
      warn: '#fff4e5',
    },
    extend: {
      maxWidth: {
        container: '1440px',
        narrow: '950px',
      },
      width: {
        container: '1440px',
        narrow: '950px',
      },
      height: {
        header: '70px',
      },
      boxShadow: {
        dropdown: '0 2px 5px 2px #EAEAEA',
      },
    },
  },
  plugins: [require('@tailwindcss/typography'), require('tailwindcss-font-inter')],
}
