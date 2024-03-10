import { createTheme } from '@mui/material';


import { COLORS } from './colors';

export const themes = createTheme({
  palette: {
    primary: {
      main: '#FDBE26',
      light: '#fff',
    },
    secondary: {
      main: '#004A84',
    },
    text: {
      // primary: 'rgba(57, 57, 57, 0.70)',
      secondary: '#252641',
    },
    grey: {
      '500': 'rgba(255, 255, 255, 0.5)',
      '800': 'rgba(255, 255, 255, 0.2)',
    },
    error: {
      main: COLORS.red['700'],
    },
    success: {
      main: COLORS.green['500'],
    },
  },

  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          color: COLORS.black['900'],
          fontWeight: 400,

        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {

          fontSize: 14,
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {

        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {

          height: 40,
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {

          fontSize: 14,
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          color: COLORS.black['900'],
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        head: {
          color: COLORS.white['900'],
          backgroundColor: COLORS.blue['700'],
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          position: 'relative',
        },
      },
    },
    MuiList: {
      styleOverrides: {
        root: {

        },
      },
    },
    MuiListItem: {
      styleOverrides: {
        root: {

        },
      },
    },
    MuiAutocomplete: {
      styleOverrides: {
        root: {

        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {

        },
      },
    },
  },
});
