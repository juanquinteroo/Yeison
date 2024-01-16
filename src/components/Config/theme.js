import { createTheme } from '@mui/material/styles';

// Aquí se definen los colores de la paleta
const verdeFlexible = '#4CAF50';
const azulFinanciero = '#2196F3';
const amarilloBrillante = '#FFEB3B';
const grisModerno = '#9E9E9E';

// Crear el tema con la paleta de colores
const theme = createTheme({
  palette: {
    primary: {
      main: verdeFlexible,
    },
    secondary: {
      main: azulFinanciero,
    },
    warning: {
      main: amarilloBrillante,
    },
    grey: {
      500: grisModerno,
    },
  },
  typography: {
    fontFamily:"'Ysabeau Infant', sans-serif",
  },
});

export default theme;