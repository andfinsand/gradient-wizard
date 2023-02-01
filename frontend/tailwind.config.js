/** @type {import('tailwindcss').Config} */

module.exports = {
  purge: {
    enabled: true,
    content: [
      './src/**/*.js',
      './src/**/*.jsx'
    ],
    options: {
      whitelist: []
    }
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      white: '#F8F8F8',
      glassDark: 'rgba(51, 51, 51, 0.75)'
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
