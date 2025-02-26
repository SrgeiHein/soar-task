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
        inter: ["Inter", "sans-serif"],
      },
      boxShadow: {
        carousel: "4px 4px 18px -2px rgba(231, 228, 232, 0.8)",
        button: "0px 0px 10px rgba(0, 0, 0, 0.1)",
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
        fadeInNew: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.3s ease-in-out",
        slideNext: "slideNext 0.3s ease-in-out",
        slidePrev: "slidePrev 0.3s ease-in-out",
        'fade-in': 'fadeInNew 0.3s ease-out forwards',
      },
    },
  },
  plugins: [],
};
