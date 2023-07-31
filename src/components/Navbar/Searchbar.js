/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useEffect } from 'react';
import { useDebounce } from '@uidotdev/usehooks';
import {
  Autocomplete,
  TextField,
} from '@mui/material';
import SearchbarListItem from './SearchbarListItem';

import { useFetchSearchResults } from '../../hooks/useGetSearchbarResults';

function Searchbar() {
  const [inputValue, setInputValue] = useState('');
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [open, setOpen] = useState(false);
  const [forceClose, setForceClose] = useState(false);
  const debouncedInputValue = useDebounce(inputValue, 500);

  const { data, isLoading } = useFetchSearchResults(
    debouncedInputValue,
    debouncedInputValue.length > 1,
  );

  useEffect(() => {
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

  const handleLabelValue = () => {
    if (isInputFocused || inputValue) return '';
    return 'Search';
  };

  return (
    <Autocomplete
      freeSolo
      disablePortal
      options={isLoading ? [] : data}
      getOptionLabel={(option) => option.name || option}
      onInputChange={(_, value) => setInputValue(value)}
      inputValue={inputValue}
      open={open}
      onClose={() => setOpen(false)}
      onFocus={() => setIsInputFocused(true)}
      onBlur={() => setIsInputFocused(false)}
      renderInput={(params) => (
        <TextField
          {...params}
          label={handleLabelValue()}
          InputLabelProps={{ shrink: false }}
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
