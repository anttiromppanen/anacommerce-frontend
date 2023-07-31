/* eslint-disable import/prefer-default-export */
import { useQuery } from '@tanstack/react-query';
import { getSearchResults } from '../services/searchbar';

const useFetchSearchResults = (searchQuery, queryIsLongEnough) => useQuery(
  ['searchResults', searchQuery],
  () => getSearchResults(searchQuery),
  { enabled: Boolean(queryIsLongEnough) },
);

export { useFetchSearchResults };
