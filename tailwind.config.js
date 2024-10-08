/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      fontFamily: {
        'Istok': ['"Istok"', "sans-serif"],
        'Inter': ['"Inter"', "sans-serif"],
        'pt-sans': ['"PT Sans"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
