/* eslint-disable import/prefer-default-export */
import { useQuery } from '@tanstack/react-query';
import { getSubcategories } from '../services/categories';

const useFetchSubcategories = (category) => useQuery(['subcategories'], () => getSubcategories(category));

export { useFetchSubcategories };
