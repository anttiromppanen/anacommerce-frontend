/* eslint-disable import/prefer-default-export */
import axios from 'axios';

const baseUrl = 'http://localhost:3001/api/products';

const getAllProducts = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};

const getProductCategories = async () => {
  const response = await axios.get(`${baseUrl}/categories`);
  return response.data;
};

export { getAllProducts, getProductCategories };
