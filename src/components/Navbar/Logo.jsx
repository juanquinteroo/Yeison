// Logo.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';

const Logo = ({ onlyImage }) => {
  return (
    <Link to="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'inherit' }}>
      <img src="/Images/Logo.png" alt="BancaFlex" style={{ maxHeight: '50px', marginRight: onlyImage ? 0 : '10px' }} />
      {!onlyImage && <Typography variant="h6">BancaFlex</Typography>}
    </Link>
  );
};

export default Logo;
