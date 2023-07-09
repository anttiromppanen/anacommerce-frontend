/* eslint-disable import/prefer-default-export */
import axios from 'axios';

const baseUrl = 'http://localhost:3001/api/products/categories';

const getSubcategories = async (category) => {
  const response = await axios.get(`${baseUrl}/${category}`);
  return response.data;
};

export { getSubcategories };
