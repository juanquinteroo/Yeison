// src/components/Navbar.js
import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import './Navbar.css';
import { Link } from 'react-router-dom';


function Navbar({ onSignInClick }) {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  return (
    <AppBar position="static" color="default">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          BancaFlex
        </Typography>
        <Button className="custom-button" href="#credito">Pedir mi crédito ya</Button>
        <Button color="inherit" component={Link} to="/auth/signin">Inicia Sesión</Button>
        <Button color="inherit" component={Link} to="/auth/register">Regístrate</Button>
        <IconButton edge="end" color="inherit" onClick={() => setDrawerOpen(true)}>
          <MenuIcon />
        </IconButton>
      </Toolbar>
      <Drawer anchor="right" open={isDrawerOpen} onClose={() => setDrawerOpen(false)}>
        <IconButton onClick={() => setDrawerOpen(false)}>
          <CloseIcon />
        </IconButton>
        <List>
          <ListItemButton component="a" href="#credito">
            <ListItemText primary="Pedir mi crédito ya" />
          </ListItemButton>
          <ListItemButton component="a" href="#requisitos">
            <ListItemText primary="Requisitos" />
          </ListItemButton>
          <ListItemButton component="a" href="#registro">
            <ListItemText primary="Registrarme" />
          </ListItemButton>
          <ListItemButton component="a" href="#pago">
            <ListItemText primary="¿Cómo pagar?" />
          </ListItemButton>
          <ListItemButton component="a" href="#costo">
            <ListItemText primary="¿Cuánto cuesta?" />
          </ListItemButton>
        </List>
      </Drawer>
    </AppBar>
  );
}

export default Navbar;
