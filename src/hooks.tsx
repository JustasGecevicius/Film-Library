import { debounce } from 'lodash';
import { useMemo } from 'react';
import { useQuery } from 'react-query';
import { getConfig } from './features/config/api';

/**
 *
 * @param fetchNextPage The function to be memoized and debounced
 * @param debounceDuration self explanatory
 * @returns A memoized and debounced version of the function
 */
export const useMemoDebounce = (
  fetchNextPage: () => void,
  debounceDuration: number
) =>
  useMemo(
    () => debounce(fetchNextPage, debounceDuration),
    [debounceDuration, fetchNextPage]
  );

export const useConfig = () => {
  const { data: config } = useQuery('config', getConfig, {
    staleTime: 300000,
  });
  return { config };
};
