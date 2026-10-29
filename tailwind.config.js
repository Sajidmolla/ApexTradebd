/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        darkbg: '#0b0e14',
        cardbg: '#131822',
        bordercolor: '#1e2636',
        accentgreen: '#00c853',
        accentred: '#ff3d00',
      }
    },
  },
  plugins: [],
}
