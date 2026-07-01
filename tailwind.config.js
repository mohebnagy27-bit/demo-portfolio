/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        cream: "#FAF9F6",
        offwhite: "#F5F4F1",
        graylight: "#ECEAE6",
        graymid: "#C9C6C0",
        charcoal: "#1B1B1A",
        charcoal2: "#4A4845",
        accent: "#A9824C",
        accentDark: "#8C6A3A",
      },
      fontFamily: {
        display: ['"Playfair Display"', "serif"],
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      spacing: {
        section: "7rem",
      },
    },
  },
  plugins: [],
};