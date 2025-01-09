/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        myFont: ["Montserrat", "sans-serif"],
      },
      colors: {
        primary: "#FF8100",
        secondary: "#888888",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "1rem",
          lg: "2rem",
          xl: "3rem",
          "2xl": "6rem",
        },
      },
    },
  },
  plugins: [],
};
