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
      black: '#272727',
      grayLight: '#606C88',
      grayDark: '#3F4C6B',
      // glassLight: 'rgba(255, 255, 255, 0.4)',
      glassLight: 'rgba(255, 255, 255, 0.3)',
      // glassLightest: 'rgba(155, 181, 255, 0.3)',
      glassLightest: 'rgba(155, 181, 255, 0.3)',
      glassDark: 'rgba(51, 51, 51, 0.75)',
    },
    borderRadius: {
      'md': '6px',
      'lg': '15px',
      // '4xl': '30px',
      'full': '9999px',
    },
    extend: {
      fontFamily: {
        'Lato': ['Lato', 'sans-serif'],
        'Pattaya': ['Pattaya', 'sans-serif'],
        'Sansita': ['Sansita', 'sans-serif'],
      },
      boxShadow: {
        'custom-main': '0 35px 12px -28px rgb(0,0,0,0.3)',
        'custom-hex': '0 17px 8px -12px rgb(0,0,0,0.3)',
      },
      dropShadow: {
        'custom-input': '0 3px 2px rgba(0, 0, 0, 0.3)',
        'custom-button': '0 3px 2px rgba(0, 0, 0, 0.3)',
      },
      width: {
        '720': '720px',
      },
    },
  },
  plugins: [],
}
