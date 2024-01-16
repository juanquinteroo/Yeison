// FloatingActionButton.jsx
import React from 'react';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const FloatingActionButton = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('sm'));

  const styles = matches ? {
    position: 'fixed',
    bottom: theme.spacing(2), // o el valor que consideres adecuado
    right: theme.spacing(2), // o el valor que consideres adecuado
    zIndex: 1, // asegúrate de que sea mayor que otros elementos de la página
  } : {};

  return (
    matches && (
      <Button
        variant="contained"
        color="secondary"
        style={styles}
        href="#credito"
      >
        Pedir mi crédito ya
      </Button>
    )
  );
};

export default FloatingActionButton;
