import { createTheme } from '@mui/material/styles'

export const theme = createTheme({
  palette: {
    primary: {
      main: '#3b82f6',
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
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
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
  },
  components: {
   MuiButton: {
      variants: [
        {
          props: { variant: 'primary' as any },
          style: {
            background:
              'linear-gradient(103.54deg, #EE2B2B 0%, #F34E1B 50%, #F8C630 100%)',
            color: '#fff',
            borderRadius: 8,
            textTransform: 'none',
            '&:hover': { opacity: 0.9 },
          },
        },
        {
          props: { variant: 'secondary' as any },
          style: {
            backgroundColor: '#F34E1B',
            color: '#fff',
            borderRadius: 6,
            textTransform: 'none',
            '&:hover': {
              backgroundColor: '#f34d1b8a',
            },
          },
        },
      ],
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none',
          fontWeight: 500,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          border:"1px solid #E1E7EF,"
        },
      },
    },
  },
})
