import { PosterMovieSeries } from '../../poster/components/PosterMovieSeries';
import { usePopular } from '../../popular/popularHooks';
import { useState } from 'react';
import { useMemoDebounce } from '../../../hooks';
import {
  useDocumentScrollListener,
  useVerticalScrollListenerCallback,
} from '../hooks/scrollHooks';

type PropsType = {
  type: 'movie' | 'series';
};

export const PosterDisplayAllPopular = ({ type }: PropsType) => {
  const { results, fetchNextPage } = usePopular(type);
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
