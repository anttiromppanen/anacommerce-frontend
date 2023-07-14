/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import {
  Autocomplete,
  TextField,
} from '@mui/material';
import SearchbarListItem from './SearchbarListItem';

import mockSearchbarData from '../../utils/mockData';

function Searchbar() {
  const [inputValue, setInputValue] = React.useState('');
  const [open, setOpen] = React.useState(false);
  const [forceClose, setForceClose] = React.useState(false);

  React.useEffect(() => {
    if (forceClose) return undefined;
    if (!inputValue) setOpen(false);
    if (inputValue.length > 1) setOpen(true);

    return () => setForceClose(false);
  }, [inputValue]);

  const handleClick = (itemName) => {
    setInputValue(itemName);
    setOpen(false);
    setForceClose(true);
  };

  return (
    <Autocomplete
      freeSolo
      disablePortal
      options={mockSearchbarData}
      getOptionLabel={(option) => option.name || option}
      onInputChange={(_, value) => setInputValue(value)}
      inputValue={inputValue}
      open={open}
      onClose={() => setOpen(false)}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Search"
          InputProps={{
            ...params.InputProps,
            type: 'search',
          }}
        />
      )}
      renderOption={(option, props) => (
        <SearchbarListItem
          id={option.id}
          name={option.key}
          icon={props.icon}
          apiCategory={props.apiCategory}
          parentCategory={props.parentCategory}
          handleClick={handleClick}
          key={option.id}
        />
      )}
    />
  );
}

export default Searchbar;
