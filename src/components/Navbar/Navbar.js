import * as React from 'react';
import {
  AppBar, Box, Toolbar, Typography, Button, IconButton, Grid, useMediaQuery,
} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import Sidebar from './Sidebar';
import Searchbar from './Searchbar';

function Navbar() {
  const breakpoint400px = useMediaQuery('(max-width: 400px)');
  return (
    <Box>
      <AppBar position="static" elevation={0}>
        <Toolbar component={Grid} container sx={{ position: 'relative' }}>
          <Grid
            item
            container
            alignItems="center"
            xs={8}
            md={4}
          >
            <Sidebar />
            <Typography variant="h6" component="div">
              Ana-commerce
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            md={4}
            order={{ xs: 3, md: 2 }}
            mb={{ xs: 2, md: 0 }}
          >
            <Searchbar />
          </Grid>
          <Grid
            item
            container
            justifyContent="flex-end"
            xs={4}
            md={4}
            order={{ xs: 2, md: 3 }}
          >
            <Button color="inherit" size="large" sx={{ display: breakpoint400px ? 'none' : 'inline-flex' }}>Login</Button>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="shopping-cart"
              sx={{ ml: 0.5 }}
            >
              <ShoppingCartIcon />
            </IconButton>
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;
