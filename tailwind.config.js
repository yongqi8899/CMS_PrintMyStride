/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
import * as themes from "daisyui/src/theming/themes";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-blue":
          "linear-gradient(to right, color(a98-rgb 0.24 0.3 0.98),rgb(34 30 191), rgb(4 15 117))",
        "gradient-lisa":
          "linear-gradient(to right,  rgb(46 76 238), rgb(118 58 245), rgb(166 4 242))",
        "gradient-green": "linear-gradient(135deg, #00739C, #81B0B2, #016D48)",
        "gradient-pink": "linear-gradient(135deg, #F49C80, #81B0B2, #F49C80)",
      },
    },
    fontFamily: {
      sans: ["Roboto", "ui-sans-serif", "system-ui"],
      redressed: ["Redressed", "cursive"],
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        dark: {
          ...themes.dark,
          primary: "#334cff",
          secondary: "#EFB51F",
          neutral: "#1D232A",
          "base-content": "white",
        },
        light: {
          ...themes.light,
          primary: "#040F75",
          secondary: "#0BBAB5",
          neutral: "#E6F0ED",
          "base-content": "#016D48",
        },
      },
    ],
  },
};
