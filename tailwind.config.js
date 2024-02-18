/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        Poppins: "Poppins",
        Raleway : "Raleway",
        Roboto : "Roboto",
        GochiHand : "GochiHand"
      },
      colors : {
        primary : "#057ADA", //Primary Color
        secondary : "#6F7DFB", // Secondary Color
      }
    },
  },
  plugins: [],
}