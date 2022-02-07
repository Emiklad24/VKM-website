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
        brand: {
          "primary-100": "#eef2ff",
          "primary-200": "#818cf8",
          "primary-400": "#651fff",
          "primary-700": "#6200ea",
          "primary-900": "#1c0352",
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
