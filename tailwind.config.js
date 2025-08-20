/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%,var(--tw-gradient-stops))"
      }
    },
    screens: {
      "2xl": { 'max': '2000px' },
      'xl': { 'max': '1200px' },
      'lg': { 'max': '1080px' },
      'md-lg': { 'max': '991px' },
      'md': { 'max': '768px' },
      "sm-md": { "max": "600px" },
      'sm': { 'max': '576px' },
      'xs': { 'max': '480px' },
      '2xs': { 'max': '340px' },
    }
  },
  plugins: [],
}


