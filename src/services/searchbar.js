/* eslint-disable import/prefer-default-export */
import axios from 'axios';

const baseUrl = 'http://localhost:3001/api/searchbar';

const getSearchResults = async (searchQuery) => {
  const response = await axios.get(baseUrl, { params: { searchQuery } });
  return response.data;
};

export { getSearchResults };
