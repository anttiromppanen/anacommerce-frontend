import React from 'react';
import { useParams } from 'react-router-dom';

import {
  Box,
  Card, CardContent, CardMedia, Grid, Typography,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useFetchSubcategories } from '../../hooks/useGetSubcategories';

function Category() {
  const { category } = useParams();
  const { isLoading, data } = useFetchSubcategories(category);
  const theme = useTheme();

  if (isLoading) return <Typography>Loading...</Typography>;

  return (
    <Box>
      <Box ml={theme.spacing(2)} mt={theme.spacing(4)}>
        <Typography variant="h2">
          {category.toUpperCase()}
        </Typography>
      </Box>
      <Grid container mt={theme.spacing(0.5)} spacing={5}>
        {
          data.map((subcategory) => (
            <Grid
              item
              container
              justifyContent="center"
              xs={4}
              md={2}
              key={subcategory.subcategoryName}
            >
              <Box p={theme.spacing(4)} bgcolor={theme.palette.grey[100]}>
                <Card
                  sx={{ width: 150 }}
                  elevation={0}
                >
                  <CardMedia
                    sx={{ height: 150 }}
                    image={subcategory.subcategoryIcon}
                    title="Subcategory icon"
                  />
                  <CardContent sx={{ textAlign: 'center' }}>
                    <Typography variant="h5">
                      {subcategory.subcategoryName}
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
            </Grid>
          ))
        }
      </Grid>
    </Box>
  );
}

export default Category;
