import React from 'react';
import {
  Box, Button, Typography, useTheme, styled, useMediaQuery, Container,
} from '@mui/material';
import grillAdLarge from '../../static/grill_ad_large.jpg';
import grillAdSmall from '../../static/grill_ad_small.jpg';

const TextContainer = styled(Container)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  left: '0',
  transform: 'translate(0, -50%)',

  [theme.breakpoints.down('md')]: {
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
}));

function GrillAd() {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <Box mt={5}>
      <Box sx={{ position: 'relative' }}>
        <Box>
          <img
            src={isLargeScreen ? grillAdLarge : grillAdSmall}
            alt=""
            style={{
              width: '100%',
              height: '600px',
              objectFit: 'cover',
            }}
          />
        </Box>
        <TextContainer>
          <Typography
            variant={isLargeScreen ? 'h1' : 'h2'}
            color="white"
            sx={{ textShadow: '1px 1px 2px black' }}
          >
            Grilling season is open!
          </Typography>
          <Typography
            variant={isLargeScreen ? 'h4' : 'h5'}
            color="white"
            sx={{ ml: 1, mb: 2, textShadow: '2px 2px 1px black' }}
          >
            Grills and accessories up to -40% off
          </Typography>
          <Button
            variant="contained"
            size={isLargeScreen ? 'large' : 'medium'}
            sx={{ mt: 2, ml: 1 }}
          >
            Check for sales on grilling hardware
          </Button>
        </TextContainer>
      </Box>
    </Box>
  );
}

export default GrillAd;
