//DrawerMenu.jsx

import React from 'react';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import CloseIcon from '@mui/icons-material/Close';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

const DrawerMenu = ({ isOpen, onClose }) => {
    const drawerWidth = '50%';
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('xl')); 
    return (
        <Drawer
            anchor="right"
            open={isOpen}
            onClose={onClose}
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: drawerWidth,
                    boxSizing: 'border-box',
                },
            }}
        >
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
    );
};

export default DrawerMenu;
