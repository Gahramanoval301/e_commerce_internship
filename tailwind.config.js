/** @type {import('tailwindcss').Config} */
export default {
  content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          dark: '#B3C8CF',
          light: '#97E7E1',
          darkest:'#7b8a8f'
        },
        secondary: {
          light: '#F8F6E3', 
          dark:'#F1EEDC'
        }
      }
    },
  },
  plugins: [],
}

