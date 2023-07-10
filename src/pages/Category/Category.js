import React from 'react';
import { useParams } from 'react-router-dom';

import {
  Box,
  Grid,
  Typography,
  useMediaQuery,
  Container,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';

import { useFetchSubcategories } from '../../hooks/useGetSubcategories';
import SubcategoryGrid from './SubcategoryGrid';

function Category() {
  const { category } = useParams();
  const { isLoading, data } = useFetchSubcategories(category);
  const theme = useTheme();
  const mobileViewIsActive = useMediaQuery(theme.breakpoints.only('xs'));

  return (
    <Container maxWidth="xl">
      <Box
        mt={theme.spacing(4)}
      >
        <Typography variant="h2">
          {category.toUpperCase()}
        </Typography>
      </Box>
      <Grid
        container
        mt={theme.spacing(0.5)}
        spacing={mobileViewIsActive ? 1 : 5}
      >
        <SubcategoryGrid data={data} isLoading={isLoading} />
      </Grid>
    </Container>
  );
}

export default Category;
