import type { DebouncedFunc } from 'lodash';
import { useCallback, useEffect } from 'react';

export const useDocumentScrollListener = (
  listenerCallback: EventListener,
  div: HTMLDivElement | null
) => {
  useEffect(() => {
    if (!div) return;
    document.addEventListener('scroll', listenerCallback);
    return () => document.removeEventListener('scroll', listenerCallback);
  }, [listenerCallback, div]);
};

export const useElementScrollListener = (
  listenerCallback: EventListener,
  element?: HTMLDivElement
) => {
  useEffect(() => {
    if (!element) return;
    element.addEventListener('scroll', listenerCallback);
    return () => document.removeEventListener('scroll', listenerCallback);
  }, [listenerCallback, element]);
};

export const useVerticalScrollListenerCallback = (
  debouncedFetchNextPage: DebouncedFunc<() => any>,
  divElement: HTMLDivElement | null
) => {
  const listener = useCallback(() => {
    if (
      !divElement ||
      window.innerHeight + 250 < divElement?.getBoundingClientRect().bottom
    )
      return;
    debouncedFetchNextPage();
  }, [debouncedFetchNextPage, divElement]);
  return listener;
};

export const useHorizontalScrollListenerCallback = (
  callback: () => any,
  callbackTriggerScrollDistance: number,
  element?: HTMLElement
) => {
  const scrollListener = useCallback(() => {
    if (!element) return;
    const { scrollLeft, scrollWidth } = element;
    const { innerWidth } = window;
    if (scrollWidth - innerWidth - scrollLeft < callbackTriggerScrollDistance) {
      callback();
    }
  }, [callback, callbackTriggerScrollDistance, element]);
  return scrollListener;
};
