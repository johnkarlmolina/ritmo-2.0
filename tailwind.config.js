/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  safelist: [
    'opacity-0','opacity-100',
    'translate-y-10','translate-y-0',
    'transition-all','duration-1000','ease-out','transform',
    'duration-700','ease-in-out','translate-y-6'
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
