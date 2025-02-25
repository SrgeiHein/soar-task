/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'sidebar-bg': '#f8f9fa',
        'active-link': '#3b82f6',
      },
      fontFamily: {
        'lato': ['Lato', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
