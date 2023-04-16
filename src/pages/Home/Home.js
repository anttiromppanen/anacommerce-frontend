import React from 'react';
import { Box } from '@mui/material';

import HeroSection from './HeroSection';
import SliderMenu from './SliderMenu';
import GrillAd from './GrillAd';

function Home() {
  return (
    <Box>
      <HeroSection />
      <SliderMenu />
      <GrillAd />
    </Box>
  );
}

export default Home;
