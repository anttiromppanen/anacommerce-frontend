/* eslint-disable import/prefer-default-export */
import { useQuery } from '@tanstack/react-query';
import { getAllProducts } from '../services/products';

const useFetchAllProducts = () => useQuery(['products'], getAllProducts);

export { useFetchAllProducts };
