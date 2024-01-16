//PasswordRecoveryPage.js

import React, { useState } from 'react';
import {
  Container,
  CssBaseline,
  TextField,
  Button,
  Typography,
  Box,
} from '@mui/material';

const PasswordRecoveryPage = () => {
  const [documentNumber, setDocumentNumber] = useState('');

  const handleDocumentNumberChange = (event) => {
    const formattedDocumentNumber = formatDocumentNumber(event.target.value);
    setDocumentNumber(formattedDocumentNumber);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implementar lógica de envío aquí
    console.log("Intento de recuperación de contraseña para documento:", documentNumber);
  };

  const formatDocumentNumber = (value) => {
    const numbersOnly = value.replace(/\D/g, '');
    return numbersOnly.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h5">
          Recuperación de Contraseña
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="document"
            label="Número de Documento"
            name="document"
            autoFocus
            value={documentNumber}
            onChange={handleDocumentNumberChange}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Recupera tu Contraseña
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default PasswordRecoveryPage;
