// HeroSection.jsx
import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';

const HeroSection = () => {
    return (
        <Box sx={{
            backgroundImage: 'url(/path-to-your-background-image.jpg)',
            backgroundSize: 'cover',
            color: 'black',
            py: 10, // Ajusta el padding vertical según sea necesario
            px: -10
        }}>
            <Container maxWidth="mb" sx={{p:0}}>
                <Typography variant="h2" component="h1" gutterBottom sx={{
                    fontWeight: 'bold', // Negrita para todo el encabezado
                    letterSpacing: 2, // Ajusta el espaciado entre letras según necesites
                    textAlign: 'left', // Alinea el texto a la izquierda
                    marginLeft: 0,
                    mb: 2 // Margen inferior para separar del subtítulo
                }}>
                    Pide tu crédito 100% digital con una entidad segura
                </Typography>
                <Typography variant="h5" sx={{
                    fontWeight: 'light', // Menos peso para el subtítulo
                    mb: 4 // Margen inferior para separar del botón
                }}>
                    Te prestamos en Colombia desde $200.000 hasta $1.500.000 sin adelantos ni cobros ocultos. Recibe tu dinero en 1 día hábil o menos
                </Typography>
                <Button variant="contained" color="secondary" size="large">
                    Pedir mi crédito ya
                </Button>
            </Container>
        </Box>
    );
};

export default HeroSection;
