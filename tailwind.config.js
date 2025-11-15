/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#7b5e3b",      // warm brown
        secondary: "#C6A675",    // gold accent
        accent: "#FFD700",       // highlight CTA
        neutralDark: "#1F2937",  // dark text
        neutralLight: "#F9FAFB", // background
        gold: "#C6A675",
      },
      fontFamily: {
        heading: ["Playfair Display", "serif"],
        body: ["Inter", "sans-serif"],
      },
      screens: {
        sm: "640px",
        md: "1024px",
        lg: "1280px",
      },
    },
  },
  plugins: [],
}
