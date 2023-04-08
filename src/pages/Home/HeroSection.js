import React from 'react';
import {
  Typography, Button, Grid,
} from '@mui/material';

function HeroSection() {
  return (
    <Grid container justifyContent="center" alignItems="center" height="100px">
      <Grid item mr={5}>
        <Typography variant="h4">The visiting hours have changed!</Typography>
      </Grid>
      <Grid item>
        <Button variant="contained" size="xl">Read more</Button>
      </Grid>
    </Grid>
  );
}

export default HeroSection;
