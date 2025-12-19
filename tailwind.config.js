/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'fire-red': '#DC2626',
        'fire-dark': '#1F2937',
        'fire-light': '#F9FAFB',
      },
    },
  },
  plugins: [],
}

