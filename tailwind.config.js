/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        counterRotate: "counter 10s linear infinite",
        clockRotate: "clock 10s linear infinite",
        thirdElementRotation: "thirdElement 20s linear infinite",
        forthElementRotation: "forthElement 20s linear infinite",
      },
      keyframes: {
        counter: {
          from: { transform: "rotate(360deg)" },
          to: { transform: "rotate(0deg)" },
        },
        clock: {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
        thirdElement: {
          from: { transform: "rotate(180deg)" },
          to: { transform: "rotate(450deg)" },
        },
        forthElement: {
          from: { transform: "rotate(450deg)" },
          to: { transform: "rotate(180deg)" },
        },
      },
    },
  },

  plugins: [require("tailwind-scrollbar")],
};
