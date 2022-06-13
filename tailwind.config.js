/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable global-require */
/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: ({ colors }) => ({
        ...colors,
        black: {
          DEFAULT: defaultTheme.colors.black,
          900: "#111111",
          800: "#282A2D",
          700: "#36383B",
          600: "#525457",
          500: "#8A8C8F",
          400: "#C2C4C7",
          300: "#DEE0E3",
          200: "#ECEEF1",
          100: "#FAFCFF",
        },
        primary: "#5eead4",
      }),
      fontFamily: {
        ...defaultTheme.fontFamily,
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
        display: ["DM Serif Display", ...defaultTheme.fontFamily.serif],
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
