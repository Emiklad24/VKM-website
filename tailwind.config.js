const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Montserrat", ...defaultTheme.fontFamily.sans],
      },

      outline: {
        blue: "2px solid #eef2ff",
        primary: "2px solid #eef2ff",
      },

      cursor: {
        auto: "auto",
        default: "default",
        pointer: "pointer",
        wait: "wait",
        text: "text",
        move: "move",
        "not-allowed": "not-allowed",
        crosshair: "crosshair",
        "zoom-in": "zoom-in",
      },

      colors: {
        mantis: {
          DEFAULT: "#8CC761",
          50: "#EFF7E9",
          100: "#E4F2D9",
          200: "#CEE7BB",
          300: "#B8DC9D",
          400: "#A2D27F",
          500: "#8CC761",
          600: "#6FB13F",
          700: "#558830",
          800: "#3B5E21",
          900: "#213513",
          950: "#d1ecf1"
        },
      },
      spacing: {
        7: "1.75rem",
        9: "2.25rem",
        28: "7rem",
        80: "20rem",
        96: "24rem",
      },
      height: {
        97: "97%",
        98: "75vh",
        half: "75vh",
        hero: "90vh",
      },
      maxHeight: {
        0: "0",
        xl: "36rem",
      },
      scale: {
        30: ".3",
      },
      boxShadow: {
        outline: "0 0 0 3px rgba(101, 31, 255, 0.4)",
      },
    },
  },
  plugins: [],
};
