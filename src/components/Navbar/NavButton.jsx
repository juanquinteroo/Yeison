//NavButton.jsx

import React from 'react';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const NavButton = ({ to, children }) => {
  return (
    <Button color="inherit" component={Link} to={to}>
      {children}
    </Button>
  );
};

export default NavButton;
