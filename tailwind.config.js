const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "blue-gray": colors.blueGray,
        lime: colors.lime,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/forms"),
    function ({ addComponents }) {
      addComponents({
        ".container": {
          maxWidth: "100%",
          "@screen sm": {
            maxWidth: "608px",
          },
          "@screen md": {
            maxWidth: "672px",
          },
          "@screen lg": {
            maxWidth: "720px",
          },
          "@screen xl": {
            maxWidth: "768px",
          },
          "@screen 2xl": {
            maxWidth: "896px",
          },
        },
      });
    },
  ],
  corePlugins: {
    container: false,
  },
};
