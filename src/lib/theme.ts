import { createTheme } from '@mui/material/styles'

export const theme = createTheme({
  palette: {
    primary: {
      main: '#1f262e',
      dark: '#1d4ed8',
      light: '#60a5fa',
    },
    secondary: {
      main: '#f59e0b',
      dark: '#d97706',
      light: '#fbbf24',
    },
    background: {
      default: '#f8fafc',
      paper: '#ffffff',
    },
  },
  typography: {
    fontFamily: [
      '"Inter", sans-serif',
    ].join(','),
    h1: {
      fontWeight: 600,
    },
    h2: {
      fontWeight: 600,
    },
    h3: {
      fontWeight: 600,
    },
    h4: {
      fontWeight: 400,
      fontSize: '12px',
      lineHeight: '16px',
      color: 'rgba(255, 255, 255, .5)',
    },
    h5: {
      fontWeight: 400,
      lineHeight: "20px",
      color: "rgba(255, 255, 255, .8)",
      fontSize: '13.67px',
    },
    h6: {
      fontWeight: 500,
      fontSize: '14px',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: 8,
          backgroundColor: 'transparent',
          '&:hover': {
            backgroundColor: 'transparent',
          },
          variants: [
            {
              props: { variant: 'gradient' },
              style: {
                color: '#fff',
                background: 'linear-gradient(103.54deg, #EE2B2B 0%, #F34E1B 50%, #F8C630 100%)',
              },
            },
          ],

        },

      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          border: "1px solid #E1E7EF,"
        },
      },
    },
  },
})
