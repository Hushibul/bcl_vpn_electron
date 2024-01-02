/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        sidebar: '#262626',
        body: '#171717',
      },
      container: {
        padding: {
          DEFAULT: '16px',
        },
      },
      keyframes: {
        transFormLeft: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        transFormRight: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
      animation: {
        transFormLeft: 'transFormLeft 1s ease-out',
        transFormRight: 'transFormLeft 1s ease-out',
      },
    },
  },
  plugins: [],
};
