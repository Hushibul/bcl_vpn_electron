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
    },
  },
  plugins: [],
};
