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
      containedPrimary: {
        height: '60px',
        fontWeight: 'bold',
        fontSize: '18px',
        lineHeight: '22px',
        textTransform: 'uppercase'
      },
      outlinedPrimary: {
        border: '2px solid #2B72F5',
        height: '40px',
        fontWeight: 'bold',
        '&:hover': {
          border: '2px solid #2B72F5',
        }
      }
    },
    MuiListSubheader: {
      root: {
        fontSize: '18px',
        fontWeight: 'bold',
        color: '#202020', // bp-black
        lineHeight: '27px',
      }
    },
  }
});

export default theme;
