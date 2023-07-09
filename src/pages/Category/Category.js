import React from 'react';
import { useParams } from 'react-router-dom';

import {
  Card, CardContent, CardMedia, Grid, Typography,
} from '@mui/material';
import { useFetchSubcategories } from '../../hooks/useGetSubcategories';

function Category() {
  const { category } = useParams();
  const { isLoading, data } = useFetchSubcategories(category);

  if (isLoading) return <Typography>Loading...</Typography>;

  console.log(data[0]);

  return (
    <Grid container>
      {
        data.map((subcategory) => (
          <Grid item xs={4} md={2}>
            <Card sx={{ width: 200 }} elevation={0}>
              <CardMedia
                sx={{ height: 100 }}
                image="https://picsum.photos/200/300"
                title="Subcategory icon"
              />
              <CardContent>
                <Typography variant="h5">
                  {subcategory.subcategoryName}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))
      }
    </Grid>
  );
}

export default Category;
