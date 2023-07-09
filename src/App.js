/* eslint-disable import/no-unresolved */
import React from 'react';
import { Routes, Route } from 'react-router';
import { Container, CssBaseline } from '@mui/material';
import { register } from 'swiper/element/bundle';

import { Navbar } from './components';
import Home from './pages';
import Category from './pages/Category/Category';

register();

function App() {
  return (
    <Container maxWidth="xl" disableGutters>
      <CssBaseline />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:category" element={<Category />} />
      </Routes>
    </Container>
  );
}

export default App;
