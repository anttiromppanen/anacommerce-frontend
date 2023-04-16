import React from 'react';
import {
  Typography, Button, Grid, useTheme, useMediaQuery,
} from '@mui/material';

function HeroSection() {
  const theme = useTheme();
  const largerThanXsScreen = useMediaQuery(theme.breakpoints.up('md'));
  const below460pxScreen = useMediaQuery('(min-width: 460px)');

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      height="100px"
      my={5}
    >
      <Grid item sx={{ textAlign: 'center' }} mr={below460pxScreen && 5}>
        <Typography variant={largerThanXsScreen ? 'h4' : 'h5'}>
          The visiting hours have changed!
        </Typography>
      </Grid>
      <Grid item>
        <Button variant="contained" size="xl">Read more</Button>
      </Grid>
    </Grid>
  );
}

export default HeroSection;
