import { useState } from 'react';
import { useMemoDebounce } from '../../../hooks';
import { PosterMovieSeries } from '../../poster/components/PosterMovieSeries';
import { useRecommended } from '../../showMovieAndSeries/hooks';
import {
  useDocumentScrollListener,
  useVerticalScrollListenerCallback,
} from '../hooks/scrollHooks';

type PropsType = {
  type: 'movie' | 'series';
  page: number;
  id: number | undefined;
};

export const PosterDisplayAllRecommended = ({ id, type }: PropsType) => {
  const { results, fetchNextPage } = useRecommended(type, id);
  const [divElement, setDivElement] = useState<HTMLDivElement | null>(null);

  const debouncedFetchNextPage = useMemoDebounce(fetchNextPage, 100);
  const listener = useVerticalScrollListenerCallback(
    debouncedFetchNextPage,
    divElement
  );
  useDocumentScrollListener(listener, divElement);

  return (
    <div
      ref={(elem) => setDivElement(elem)}
      className='flex-row flex-wrap gap-4 center'
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
