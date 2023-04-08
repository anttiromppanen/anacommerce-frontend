import { Stack, Typography } from '@mui/material';
import React from 'react';

import { useFetchProductCategories } from '../../hooks/useGetProductCategories';
import menuItems from '../../utils/productCategoryIconSelector';

function SliderMenu() {
  const { isLoading, data } = useFetchProductCategories();

  if (isLoading) return <Typography>Loading...</Typography>;

  return (
    <swiper-container slides-per-view="auto">
      {
        data.map((category) => {
          const Icon = menuItems[category];

          return (
            <swiper-slide>
              <Stack alignItems="center">
                <Icon sx={{ fontSize: '80px' }} />
                <Typography variant="h6">{category}</Typography>
              </Stack>
            </swiper-slide>
          );
        })
      }
    </swiper-container>
  );
}

export default SliderMenu;
