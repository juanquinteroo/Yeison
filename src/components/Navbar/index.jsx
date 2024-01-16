import React, { useState, useEffect } from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Box } from '@mui/material';
import DrawerMenu from './DrawerMenu';
import NavButton from './NavButton';
import Logo from './Logo';

const Navbar = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [isScrolledDown, setIsScrolledDown] = useState(false);
  const [isScrolledUp, setIsScrolledUp] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolledDown(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolledUp(window.scrollY < 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <AppBar position="fixed" color="default">
      <Toolbar>
        {/* Siempre muestra el logo, pero en versión móvil solo muestra la imagen */}
        <Logo onlyImage={isMobile} />

        {/* Botones "Iniciar Sesión" y "Registrarse" siempre visibles en escritorio */}
        {!isMobile && (
          <Box sx={{ display: 'flex', flexGrow: 1, justifyContent: 'flex-end' }}>
            <NavButton to="/auth/register">Pedir mi credito ya</NavButton>
            <NavButton to="/auth/signin">Inicia Sesión</NavButton>
            <NavButton to="/auth/register">Regístrate</NavButton>
          </Box>
        )}

        {isMobile && isScrolledUp &&(
          <Box sx={{ display: 'flex', flexGrow: 1, justifyContent: 'flex-end' }}>
            <NavButton to="/auth/signin">Inicia Sesión</NavButton>
            <NavButton to="/auth/register">Regístrate</NavButton>
          </Box>
        )}
        {isMobile && isScrolledDown && (
          <><NavButton to="#credito" sx={{ ml: 'left', display: 'flex' }}>Pedir mi crédito ya</NavButton>
          <NavButton to="/auth/signin">Inicia Sesión</NavButton></>
        )}

        {/* Ícono del menú, visible en escritorio y móvil */}
        <IconButton
          edge="end"
          color="inherit"
          onClick={() => setDrawerOpen(true)}
          sx={{ ml: 'auto' }}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>
      <DrawerMenu isOpen={isDrawerOpen} onClose={() => setDrawerOpen(false)} />
    </AppBar>
  );
};

export default Navbar;