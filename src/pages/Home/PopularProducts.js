import React from 'react';
import {
  Box, Container, Typography,
} from '@mui/material';
import { ProductCard } from '../../components';

import { useFetchTopTenSoldProducts } from '../../hooks/useGetStats';

function PopularProducts() {
  const { isLoading, data } = useFetchTopTenSoldProducts();

  if (isLoading) return <Typography>Loading...</Typography>;

  return (
    <>
      <Container maxWidth="xl">
        <Typography variant="h4" mt={5} mb={5}>Popular products</Typography>
      </Container>
      <Box>
        <swiper-container slides-per-view="4" navigation="true">
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
