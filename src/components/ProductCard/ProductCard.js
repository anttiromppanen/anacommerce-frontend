/* eslint-disable react/prop-types */
import React from 'react';
import {
  Card, CardMedia, CardContent, CardActionArea, Typography,
} from '@mui/material';

function ProductCard({
  name, price, image, quantity, skus,
}) {
  return (
    <Card sx={{ width: 300 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={image}
          alt=""
        />
        <CardContent>
          {
            skus.length > 1
            && <Typography variant="body2">Different options available</Typography>
          }
          <Typography variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="h4">
            {price}
            €
          </Typography>
          <Typography variant="body2">
            Available in stock:
            {' '}
            {quantity}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default ProductCard;
