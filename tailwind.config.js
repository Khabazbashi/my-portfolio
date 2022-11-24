/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        saraimg: "url('/public/saraimg.jpeg')",
        linqin: "url('/public/linqin.png')",
        wedding: "url('/public/wedding.png')",
        calculator: "url('/public/calculator.png')",
      },
      screens: {
        "3xl": "1835px",
        "3.5xl": "2100px",
        "4xl": "2419px",
        "5xl": "2856px",
      },
    },
  },
  plugins: [],
};
