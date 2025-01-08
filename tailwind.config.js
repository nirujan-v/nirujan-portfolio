/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        itiliana: ['Italiana', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        ibm: ['Ibm-Plex-Sans', 'sans-serif'],
        raleway: ['Raleway', 'sans-serif']
      },
      colors: {
        vuejs: "#49e659",
      },
      keyframes: {
        'fade-in-left': {
          '0%': { opacity: '0', transform: 'translateX(-50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'reveal-left-to-right': {
          '0%': { 'clip-path': 'inset(0 100% 0 0)', opacity: '0' },
          '50%': { opacity: '0.5' },
          '100%': { 'clip-path': 'inset(0 0 0 0)', opacity: '1' },
        },
      },
      animation: {
        'fade-in-left': 'fade-in-left 1s linear',
        'reveal-left-to-right': 'reveal-left-to-right 1s ease-out',
      },
    },
  },
  plugins: [],
};