/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
        garamond: ['"Cormorant Garamond"', 'serif'],
      },
    },
  },
  plugins: [],
};
