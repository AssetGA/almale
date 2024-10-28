/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      white: "#ffffff",
      "gray-header": "#edf1f5",
      black: "#000000",
      purple: "#7e5bef",
      red: "#DC143C",
      pink: "#ff49db",
      orange: "#ff7849",
      green: "#143A23",
      "green-light": "#205D38",
      yellow: "#ffc82c",
      "gray-dark": "#273444",
      gray: "#8492a6",
      "gray-light": "#d3dce6",
      "gray-white": "#f0f2f5",
      azure: "#F8F8FF",
    },
    fontFamily: {
      geist: ["geistMonoVF", "geistVF", "Montserrat", "Montserrat-bold"],
    },
    extend: {
      // spacing: {
      //   128: "32rem",
      //   144: "36rem",
      // },
      // borderRadius: {
      //   "4xl": "2rem",
      // },
      // rotate: {
      //   17: "17deg",
      // },
    },
  },
  plugins: [],
};
