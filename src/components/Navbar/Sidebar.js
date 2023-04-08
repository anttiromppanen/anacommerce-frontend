/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import {
  Drawer, Box, Typography, IconButton,
} from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';

function Sidebar() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        onClick={() => setDrawerOpen(true)}
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <Box p={2} width="250px" textAlign="center" role="presentation">
          <Typography variant="h6" component="div">Menu</Typography>
        </Box>
      </Drawer>
    </>
  );
}

export default Sidebar;
