import React from 'react';
import { Box } from '@mui/material';

import HeroSection from './HeroSection';
import SliderMenu from './SliderMenu';

function Home() {
  return (
    <Box>
      <HeroSection />
      <SliderMenu />
    </Box>
  );
}

export default Home;
