const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        serifFont: ['Noto Serif Display', 'sans-serif'],
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.transform-center': {
          transform: 'translate(-50%, 0)',
          left: '50%',
        },
        '.transform-v-center': {
          transform: 'translate(0, -50%)',
          top: '50%',
        },
        '.flex-row': {
          display: 'flex',
          'flex-direction': 'row',
        },
        '.flex-col': {
          display: 'flex',
          'flex-direction': 'column',
        },
        '.font-noto': {
          'font-family': 'Noto Serif Display, serif',
        },
        '.darker-background': {
          'background-color': 'rgba(0, 0, 0, 0.6)',
          'box-shadow': '0 0 10px 10px rgba(0, 0, 0, 0.6)',
        },
        '.lower-backdrop': {
          'box-shadow': 'inset 0 -200px 100px -50px black',
        },
        '.center': {
          'justify-content': 'center',
          'align-items': 'center',
        },
      });
    }),
  ],
  darkMode: 'selector',
};
