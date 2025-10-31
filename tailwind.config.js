/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f0f9ff",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
        },
        // custom tokens for consultation component
  "grey-65": "#A1A1AA",
  // slightly darker neutral for stronger borders
  "grey-65-strong": "#A1A1A1",
        // neutral border used across forms and controls
        "grey-200": "#d1d5db",
        // very light grey used for the top border of time buttons
        "grey-91": "#E1E7EF",
        "muted-700": "#3F3F46",
        // consultation gradient utility
      },
      backgroundImage: {
        "consult-gradient":
          "linear-gradient(103.54deg, #EE2B2B 0%, #F34E1B 50%, #F8C630 100%)",
      },
      boxShadow: {
        // custom hover shadow used for the Schedule Consultation button
        "consult-hover": "0px 25px 50px -12px #33404D66",
        // stronger hover shadow used for time buttons (more visible on hover)
        "time-btn": "0px 8px 20px -6px #33404D33",
        // active/pressed shadow for time buttons
        "time-active": "0px 6px 12px -8px #33404D33",
      },
      fontFamily: {
        // add Inter as a named font family so we can use `font-inter`
        inter: [
          'Inter',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
        ],
      },
      fontSize: {
        // mapped from Figma typography
        h4: ['22px', { lineHeight: '28px' }],
        body: ['16px', { lineHeight: '24px' }],
        'btn-lg': ['16px', { lineHeight: '20px' }],
        btn: ['14px', { lineHeight: '18px' }],
        caption: ['14px', { lineHeight: '16px' }],
        overline: ['12px', { lineHeight: '16px' }],
      },
      letterSpacing: {
        // 0.4% of 14px ≈ 0.056px
        'ls-0_4pct': '0.056px',
        // percentage-based tracking mapped to em units
        'ls-1_25pct': '0.0125em',
        'ls-0_25pct': '0.0025em',
        'ls-1_5pct': '0.015em',
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false, // Disable Tailwind's base styles to avoid conflicts with MUI
  },
};
