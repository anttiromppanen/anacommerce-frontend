/* eslint-disable import/prefer-default-export */
import { useQuery } from '@tanstack/react-query';
import { getProductCategories } from '../services/products';

const useFetchProductCategories = () => useQuery(['productCategories'], getProductCategories);

export { useFetchProductCategories };
