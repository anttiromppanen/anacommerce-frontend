/* eslint-disable import/prefer-default-export */
import { useQuery } from '@tanstack/react-query';
import { getTopTenSoldProducts } from '../services/stats';

const useFetchTopTenSoldProducts = () => useQuery(['mostSoldProducts'], getTopTenSoldProducts);

export { useFetchTopTenSoldProducts };
