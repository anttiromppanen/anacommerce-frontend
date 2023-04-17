import React from 'react';
import { Box } from '@mui/material';

import HeroSection from './HeroSection';
import SliderMenu from './SliderMenu';
import GrillAd from './GrillAd';
import PopularProducts from './PopularProducts';

function Home() {
  return (
    <Box>
      <HeroSection />
      <SliderMenu />
      <GrillAd />
      <PopularProducts />
    </Box>
  );
}

export default Home;
