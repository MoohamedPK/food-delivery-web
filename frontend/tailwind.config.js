import { transform } from 'motion';

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        outfit: ["Cormorant Garamond"],
      },

      backgroundImage: {
        'header-bg' : "url('./src/assets/header_img.png')",
      },

      //YOUR KEYFRAMES
      keyframes: {
        fadeIn: {
          "0%" : {opacity: 0},
          '100%': {opacity: 1}
        },

        spinner: {
          "100%" : {transform: 'rotate(360deg)'}
        },

      },

      //ANIMATIONS
      animation: {
        fadeIn: 'fadeIn 0.3s',
        spinner: 'spinner 1s infinite'
      }
    },
  },
  plugins: [],
};

