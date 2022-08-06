/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "home-background": "url('/src/assets/images/bg.png')",
      },
    },
  },
  daisyui: {
    themes: [
      {
        greenClinic: {
          primary: "#0FCFEC",
          secondary: "#19D3AE",
          accent: "#3A4256",
          neutral: "#3d4451",
          "base-100": "#ffffff",
          green6: "#16a34a",
          green7: "#15803d",
        },
      },
      "light",
      "dark",
      "cupcake",
    ],
  },
  plugins: [require("daisyui")],
};