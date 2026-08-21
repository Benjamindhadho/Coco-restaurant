/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        cotorisBold: ['"Cotoris Bold"', '"Playfair Display"', 'Georgia', 'serif'],
        poppins: ['Poppins', 'Inter', 'sans-serif'],
        playfairDisplay: ['"Playfair Display"', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}
