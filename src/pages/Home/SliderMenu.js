import React from 'react';
import { Link } from 'react-router-dom';
import {
  Stack, Typography, useMediaQuery, useTheme,
} from '@mui/material';

import { useFetchProductCategories } from '../../hooks/useGetProductCategories';
import menuItems from '../../utils/productCategoryIconSelector';

function SliderMenu() {
  const { isLoading, data } = useFetchProductCategories();
  const theme = useTheme();
  const screenLargerThanXs = useMediaQuery(theme.breakpoints.up('md'));
  const screenBelow650px = useMediaQuery('(max-width: 650px)');

  if (isLoading) return <Typography>Loading...</Typography>;

  return (
    <swiper-container slides-per-view={screenBelow650px ? '3' : '5'}>
      {
        data.map((category) => {
          const Icon = menuItems[category];

          return (
            <swiper-slide key={category}>
              <Stack
                component={Link}
                to={`/${category.toLowerCase()}`}
                alignItems="center"
                sx={{ textDecoration: 'none', color: 'inherit' }}
              >
                <Icon sx={{ fontSize: screenLargerThanXs ? '70px' : '60px' }} />
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
