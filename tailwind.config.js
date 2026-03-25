/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'henne-green': '#064e3b',
        'henne-gold': '#fbbf24',
      },
    },
  },
  plugins: [],
}