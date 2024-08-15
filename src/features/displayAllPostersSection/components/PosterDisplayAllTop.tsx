import { PosterMovieSeries } from '../../poster/components/PosterMovieSeries';
import { useState } from 'react';
import { useTop } from '../../topRated/topRatedHooks';
import {
  useDocumentScrollListener,
  useVerticalScrollListenerCallback,
} from '../hooks/scrollHooks';
import { useMemoDebounce } from '../../../hooks';

type PropsType = {
  type: 'movie' | 'series';
};

export const PosterDisplayAllTop = ({ type }: PropsType) => {
  const { results, fetchNextPage } = useTop(type);
  const [divElement, setDivElement] = useState<HTMLDivElement | null>(null);

  const debouncedFetchNextPage = useMemoDebounce(fetchNextPage, 100);
  const listener = useVerticalScrollListenerCallback(
    debouncedFetchNextPage,
    divElement
  );
  useDocumentScrollListener(listener, divElement);

  return (
    <div
      className='flex-row flex-wrap justify-between gap-4'
      ref={(elem) => setDivElement(elem)}
    >
      {results?.map((elem, index) => (
        <PosterMovieSeries
          key={index}
          imageURL={elem.imageURL}
          title={elem.title}
          release_date={elem.release_date}
          id={elem.id}
          liked={elem.liked}
          rating={elem.rating}
          type={type}
        />
      ))}
    </div>
  );
};
