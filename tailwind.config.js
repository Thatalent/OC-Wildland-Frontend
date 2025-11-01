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
          50: '#f0f9ff',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
        },
      },
      backgroundImage: {
        'consult-gradient': 'linear-gradient(97.01deg, #EE2B2B 0%, #F34E1B 50%, #F8C630 100%)',
      },
      boxShadow: {
        'consult-hover': '0 4px 6px -1px rgba(243, 78, 27, 0.3), 0 2px 4px -1px rgba(243, 78, 27, 0.2)',
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false, // Disable Tailwind's base styles to avoid conflicts with MUI
  },
}
