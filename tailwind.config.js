/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        "slide-left": {
          from: { transform: "translateX(-100%)" },
          to: { transform: "translateX(0%)" },
        },
      },
      animation: {
        "slide-left-infinite": "slide-left 25s linear infinite",
      },
      fontFamily: {
        open: ["Open Sans", "sans-serif"], // Make sure the font name is a string
        rubik: ["Rubik", "sans-serif"],
      },
    },
  },
  plugins: [],
};
