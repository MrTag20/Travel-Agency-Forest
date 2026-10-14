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
          DEFAULT: '#2e3a2f',
          dark: '#1c2e24',
          light: '#435444',
        },
        secondary: {
          DEFAULT: '#6b7f5b',
          light: '#8ba179',
        },
        tertiary: '#d9c9b2',
        accent: {
          DEFAULT: '#c96f4f',
          hover: '#b35d3e',
          light: '#f5ddd3',
        },
        bg: '#f8f6ee',
        ivory: '#f8f6ee',
        sand: {
          DEFAULT: '#d9c9b2',
          dark: '#c4b299',
        },
        'mangrove-deep': '#2e3a2f',
        gold: {
          DEFAULT: '#c96f4f',
          hover: '#b35d3e',
          light: '#f5ddd3',
        },
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Plus Jakarta Sans', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
