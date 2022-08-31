import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
export const theme = createTheme({
  palette: {
    primary: {
      main: '#00c9bf',
    },
    secondary: {
      main: '#79f2de',
    },
    gray: {
      main: '#d1d1d1'
    },
    light: {
      main: '#edfffa'
    }
    ,
    error: {
      main: red.A400,
    },
  },
});
