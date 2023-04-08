import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import Sidebar from './Sidebar';

function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" elevation={0}>
        <Toolbar sx={{ position: 'relative' }}>
          <Sidebar />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Ana-commerce
          </Typography>
          <Button color="inherit" size="large">Login</Button>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="shopping-cart"
            sx={{ ml: 0.5 }}
          >
            <ShoppingCartIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;
