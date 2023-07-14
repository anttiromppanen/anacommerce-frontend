/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import {
  ListItem, ListItemButton, ListItemAvatar, Avatar, ListItemText,
} from '@mui/material';

const linkUrlSelector = (category, name, parentCategory = '') => {
  const categoryLowerCase = category.toLowerCase();
  const parentCategoryLowerCase = parentCategory.toLowerCase();
  const nameLowerCase = name.toLowerCase();

  if (categoryLowerCase === 'products') return `/product/${nameLowerCase}`;
  if (categoryLowerCase === 'category') return `/${nameLowerCase}`;
  return `/${parentCategoryLowerCase}/${nameLowerCase}`;
};

function SearchbarListItem({
  id, name, icon, apiCategory, parentCategory, handleClick,
}) {
  return (
    <ListItem key={id} disablePadding>
      <ListItemButton
        component={Link}
        to={linkUrlSelector(apiCategory, name, parentCategory)}
        onClick={() => handleClick(name)}
      >
        <ListItemAvatar>
          <Avatar src={icon} />
        </ListItemAvatar>
        <ListItemText primary={name} />
        <ListItemText
          primary={apiCategory === 'products' ? '' : 'category'}
          sx={{ textAlign: 'right' }}
        />
      </ListItemButton>
    </ListItem>
  );
}

export default SearchbarListItem;
