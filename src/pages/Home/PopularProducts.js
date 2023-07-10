import React from 'react';
import {
  Box, Container, Typography, useMediaQuery, useTheme,
} from '@mui/material';
import { ProductCard } from '../../components';

import { useFetchTopTenSoldProducts } from '../../hooks/useGetStats';

function PopularProducts() {
  const { isLoading, data } = useFetchTopTenSoldProducts();
  const theme = useTheme();
  const screenIsBelow1200px = useMediaQuery(theme.breakpoints.down('lg'));
  const mobileViewIsActive = useMediaQuery(theme.breakpoints.only('xs'));

  if (isLoading) return <Typography>Loading...</Typography>;

  const numberOfSlides = () => {
    if (mobileViewIsActive) return 1;
    if (screenIsBelow1200px) return 2;
    if (data.length < 4) return data.length;
    return 4;
  };

  return (
    <>
      <Container maxWidth="xl">
        <Typography variant="h4" mt={5} mb={5}>Popular products</Typography>
      </Container>
      <Box>
        <swiper-container
          slides-per-view={numberOfSlides()}
          navigation="true"
        >
          {
            data.map((product) => (
              <swiper-slide
                lazy="true"
                style={{ display: 'flex', justifyContent: 'center' }}
                key={product.id}
              >
                <ProductCard
                  name={product.name}
                  price={product.price.$numberDecimal}
                  image={product.images[0]}
                  quantity={product.skus[0].quantity}
                  skus={product.skus}
                />
              </swiper-slide>
            ))
          }
        </swiper-container>
      </Box>
    </>
  );
}

export default PopularProducts;
