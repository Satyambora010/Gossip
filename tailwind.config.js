/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        softBlue: '#4A90E2',
        lightGray: '#F5F5F5',
        darkCharcoal: '#2C2C2C',
        cyan: '#00D9F9',
      },
    },
  },
  plugins: [],
}

