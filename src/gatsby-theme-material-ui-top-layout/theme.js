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
    MuiCssBaseline: {
      '@global': {
        body: {
          backgroundColor: '#fff',
          color: '#767373',
          fontStyle: 'normal',
          fontWeight: 'normal',
          fontSize: '1.125rem',
        },
      },
    },
    MuiPaper: {
      root: {
        backgroundColor: '#FAFBFC',
        fontSize: '1rem',
      },
      elevation1: {
        boxShadow: '0 4px 4px rgba(0, 0, 0, 0.03)',
      },
      elevation2: {
        boxShadow: '0px 4px 10px rgba(32, 32, 32, 0.1)',
      },
    },
    MuiChip: {
      root: {
        borderRadius: '5px',
        backgroundColor: 'rgba(118, 115, 115, 0.1)',
        fontSize: '1rem',
        color: '#767373',
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
        textTransform: 'uppercase',
        '&:hover': {
          border: '2px solid #2B72F5',
        },
      },
      outlinedSizeSmall: {
        height: 40,
        fontWeight: 'bold',
      },
      containedSizeSmall: {
        height: 40,
        fontWeight: 'bold',
        width: 200,
      },
      outlinedSizeLarge: {
        minHeight: 60,
        minWidth: 230,
        fontWeight: 'bold',
        fontSize: '1.125rem',
        lineHeight: '1.375rem',
      },
    },
  }
});

export default theme;
