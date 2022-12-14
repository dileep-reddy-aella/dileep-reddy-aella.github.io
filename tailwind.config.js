/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        beating: {
          '100%': { opacity: '1' },
          '0%': { opacity: '.5' }
        }
      },
      animation: {
        beating: 'beating 2s ease-in-out infinite'
      }
    },
    screens: {
      'xs': { max: '639px' },
      'sm': { min: '640px', max: '767px' },
      // => @media (min-width: 640px) { ... }

      'md': { min: '768px', max: '1023px' },
      // => @media (min-width: 768px) { ... }

      'lg': { min: '1024px', max: '1279px' },
      // => @media (min-width: 1024px) { ... }

      'xl': { min: '1280px', max: '1535px' },
      // => @media (min-width: 1280px) { ... }

      '2xl': { min: '1536px' },
      // => @media (min-width: 1536px) { ... }
    }
  },
  plugins: [],
}
