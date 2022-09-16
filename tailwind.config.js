/**
 * @format
 * @type {import('tailwindcss').Config}
 */

const colors = require("tailwindcss/colors");

module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      ...colors,
      primary: "#Ffbb0a",
      success: "#1DB954",
      darkBlue: "#11345A",
    },
  },
  plugins: [require("flowbite/plugin")],
};
