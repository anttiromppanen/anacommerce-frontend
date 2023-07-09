import React from 'react';
import { useParams } from 'react-router-dom';

import { Typography } from '@mui/material';
import { useFetchSubcategories } from '../../hooks/useGetSubcategories';

function Category() {
  const { category } = useParams();
  const { isLoading, data } = useFetchSubcategories(category);

  if (isLoading) return <Typography>Loading...</Typography>;

  console.log(data[0]);

  return (
    <div>{category}</div>
  );
}

export default Category;
