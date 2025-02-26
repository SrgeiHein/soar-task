/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "sidebar-bg": "#f8f9fa",
        "active-link": "#3b82f6",
      },
      fontFamily: {
        lato: ["Lato", "sans-serif"],
      },
      boxShadow: {
        carousel: "4px 4px 18px -2px rgba(231, 228, 232, 0.8)",
        button:
          "0px 8px 24px -4px rgba(231, 228, 232, 0.8), 0px 2px 8px -2px rgba(24, 20, 243, 0.12)",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideNext: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-120px)" },
        },
        slidePrev: {
          "0%": { transform: "translateX(-120px)" },
          "100%": { transform: "translateX(0)" },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.3s ease-in-out",
        slideNext: "slideNext 0.3s ease-in-out",
        slidePrev: "slidePrev 0.3s ease-in-out",
      },
    },
  },
  plugins: [],
};
