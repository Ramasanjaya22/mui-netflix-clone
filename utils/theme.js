import { createTheme,responsiveFontSizes} from '@mui/material/styles';

const base = createTheme({
  palette: {
    primary: {
      main: '#e50914',
    },
    secondary: {
      main: '#ffffff',
    },
  },
});

const theme = responsiveFontSizes(base)

export default theme
