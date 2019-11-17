import { createMuiTheme, colors } from '@material-ui/core';

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#2B72F5', // bp-blue
    },
    secondary: {
      main: '#41CBF0', // bp-blue-arctic
    },
    error: {
      main: colors.red.A400,
    },
    background: {
      default: '#FAFBFC',
    },
  },
  overrides: {
    MuiPaper: {
      root: {
        backgroundColor: '#FAFBFC',
        fontSize: '1rem',
      },
      elevation1: {
        boxShadow: '0 4px 4px rgba(0, 0, 0, 0.03)',
      }
    },
    MuiButton: {
      containedPrimary: {
        height: 60,
        width: 230,
        fontWeight: 'bold',
        fontSize: '1.125rem',
        lineHeight: '1.375rem',
        textTransform: 'uppercase'
      },
      outlinedPrimary: {
        border: '2px solid #2B72F5',
        height: 40,
        fontWeight: 'bold',
        '&:hover': {
          border: '2px solid #2B72F5',
        }
      }
    },
  }
});

export default theme;
