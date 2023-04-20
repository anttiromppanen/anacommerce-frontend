/* eslint-disable import/prefer-default-export */
import axios from 'axios';

const baseUrl = 'http://localhost:3001/api/stats';

const getTopTenSoldProducts = async () => {
  const response = await axios.get(`${baseUrl}/mostsold`);
  return response.data;
};

export { getTopTenSoldProducts };
