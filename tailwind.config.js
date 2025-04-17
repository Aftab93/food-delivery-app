/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FF5722", // Bold Deep Orange
        secondary: "#FF8F00", // Light Muted Orange (perfect for hover)
      },
    },
  },
  plugins: [],
};
