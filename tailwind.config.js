const { transform } = require('typescript');

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
        
        electricblue: "#4A90E2",
        neongreen: "#7ED321",
        softpink: "#FF6FCF"
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)"
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.2)"
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.8)"
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1.0)"
          }
        },
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
        blob: "blob 8s infinite linear",
        'fade-in-left': 'fade-in-left 1s linear',
        'reveal-left-to-right': 'reveal-left-to-right 1s ease-out',
      },
    },
  },
  plugins: [],
};