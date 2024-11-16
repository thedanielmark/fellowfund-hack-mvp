const defaultTheme = require("tailwindcss/defaultTheme");
require("tailwindcss/colors");
import colors from "tailwindcss/colors";

const config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./layouts/**/*.{js,ts,jsx,tsx,mdx}",
    "./providers/**/*.{js,ts,jsx,tsx,mdx}",
    "./utils/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      display: ["var(--font-display)", ...defaultTheme.fontFamily.sans],
      body: ["var(--font-body)", ...defaultTheme.fontFamily.sans],
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        ...colors,
        primary: {
          "50": "#fef2f3",
          "100": "#fde6e8",
          "200": "#fad1d6",
          "300": "#f6abb4",
          "400": "#f07c8d",
          "500": "#e64d66",
          "600": "#d63d5e",
          "700": "#b11f42",
          "800": "#941d3e",
          "900": "#7f1c3b",
          "950": "#460b1b",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
export default config;
