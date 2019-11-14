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
      default: `#FAFBFC`,
    },
  },
  overrides: {
    MuiPaper: {
      root: {
        backgroundColor: `#FAFBFC`,
      }
    },
    MuiButton: {
      outlinedPrimary: {
        border: '2px solid #2B72F5',
        fontWeight: 'bold',
        '&:hover': {
          border: '2px solid #2B72F5',
        }
      }
    }
  }
});

export default theme;
