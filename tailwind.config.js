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
          DEFAULT: "#58a8b3",
          50: "#f2f7f7",
          100: "#d7f0f8",
          200: "#a9e2f0",
          300: "#73c5da",
          400: "#3aa4bf",
          500: "#2a85a3",
          600: "#246b88",
          700: "#20516b",
          800: "#17374d",
          900: "#0f2234",
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
