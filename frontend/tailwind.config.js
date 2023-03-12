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
      black: '#323232',
      grayLight: '#606C88',
      grayDark: '#3F4C6B',
      glassMedium: 'rgba(255, 255, 255, 0.5)',
      glassLight: 'rgba(255, 255, 255, 0.3)',
      glassLightest: 'rgba(255, 255, 255, 0.1)',
      glassDark: 'rgba(51, 51, 51, 0.75)',
    },
    borderRadius: {
      'md': '6px',
      'lg': '15px',
      'full': '9999px',
    },
    extend: {
      fontFamily: {
        'Lato': ['Lato', 'sans-serif'],
        'Pattaya': ['Pattaya', 'sans-serif'],
        'Sansita': ['Sansita', 'sans-serif'],
      },
      boxShadow: {
        'custom-nav': '0 0px 7px rgb(0,0,0,0.2)',
        'custom-main': '0 35px 12px -28px rgb(0,0,0,0.2), inset 0 -1px 3px rgb(0,0,0,0.2), inset 0px 25px 10px -20px rgba(255, 255, 255, 0.2)',
        'custom-hex': '0 17px 8px -12px rgb(0,0,0,0.2)',
        'custom-input-inner': 'inset 2px 4px 7px rgba(0, 0, 0, 0.22), inset -3px -4px 7px rgba(255, 255, 255, 0.6)',
        'custom-button': '3px 3px 5px rgba(0, 0, 0, 0.15), inset -2px -2px 3px rgba(0, 0, 0, 0.2), inset 2px 2px 3px rgba(255, 255, 255, 0.35)',
        'custom-button-press': '0 2px 2px rgba(0, 0, 0, 0.1), inset 2px 2px 8px rgba(0, 0, 0, 0.2), inset -2px -2px 8px rgba(255, 255, 255, 0.2)',
      },
      dropShadow: {
        // 'custom-title': '1px 1px 0px rgba(200, 200, 200, 0.3)',
      },
      width: {
        '560': '560px',
        '60': '55px',
        '38': '155px',
        '34': '135px',
      },
      height: {
        '60': '60px',
      },
    },
  },
  plugins: [],
}
