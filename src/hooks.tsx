import { debounce } from 'lodash';
import { useMemo } from 'react';
import { useQuery } from 'react-query';
import { getConfig } from './features/config/api';
import {
  useDocumentScrollListener,
  useHorizontalScrollListenerCallback,
  useVerticalScrollListenerCallback,
} from './features/displayAllPostersSection/hooks/scrollHooks';

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

export function useAllElementsVertical<T extends Function>(
  useEffectHook: T,
  divElement: HTMLDivElement | null
) {
  const { results, fetchNextPage } = useEffectHook();
  const debouncedFetchNextPage = useMemoDebounce(fetchNextPage, 100);
  const listener = useVerticalScrollListenerCallback(
    debouncedFetchNextPage,
    divElement
  );
  useDocumentScrollListener(listener, divElement);
  return results;
}

export const useAllElementsHorizontal = (useEffectHook, divElement) => {
  const { results, fetchNextPage } = useEffectHook();
  const debouncedFetchNextPage = useMemoDebounce(fetchNextPage, 100);
  const listener = useHorizontalScrollListenerCallback(
    debouncedFetchNextPage,
    200,
    divElement
  );
  useDocumentScrollListener(listener, divElement);
  return results;
};