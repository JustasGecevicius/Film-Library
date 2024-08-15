import { PosterMovieSeries } from '../../poster/components/PosterMovieSeries';
import { MoviesPosterDisplayType, PosterType } from '../types';
import { useState } from 'react';
import {
  HOOKS_FOR_SECTIONS,
  SECTION_NAMES,
  TYPE_NAMES,
} from '../constants/sections';
import { useRecommended } from '../../showMovieAndSeries/hooks';
import { useMemoDebounce } from '../../../hooks';
import {
  useElementScrollListener,
  useHorizontalScrollListenerCallback,
} from '../../displayAllPostersSection/hooks/scrollHooks';
import type { MovieObject } from '../../movies/types';
import { DisplayPosterHeader } from './helperComponents';

export const PosterDisplayMoviesSeries = ({
  section,
  type,
  id,
  link,
}: MoviesPosterDisplayType & PosterType & { link?: string }) => {
  const [divElement, setDivElement] = useState<HTMLDivElement>();
  const useSectionHook =
    section === 'recommended' ? useRecommended : HOOKS_FOR_SECTIONS[section];
  const { results: data, fetchNextPage } = useSectionHook(type, id);

  const debouncedFetchNextPage = useMemoDebounce(fetchNextPage, 100);
  const listener = useHorizontalScrollListenerCallback(
    debouncedFetchNextPage,
    200,
    divElement
  );
  useElementScrollListener(listener, divElement);

  return (
    <div className='pt-8 overflow-x-auto'>
      <DisplayPosterHeader
        link={
          link || `/film_library/all/${type}/${section}${id ? `/${id}` : ''}`
        }
        title={`${SECTION_NAMES[section]} ${TYPE_NAMES[type]}`}
      />
      <div
        className='flex flex-row py-4 overflow-auto gap-x-4'
        ref={(ref) => setDivElement(ref || undefined)}
      >
        {data?.map((elem, index) => (
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
    </div>
  );
};

export const PosterDisplayMoviesSeriesNoFetch = ({
  arr,
  type,
  link,
  section,
}: MoviesPosterDisplayType &
  PosterType &
  LinkType & { arr: MovieObject[] }) => {
  return (
    <div className='pt-8 overflow-x-auto'>
      <DisplayPosterHeader
        link={link}
        title={`${SECTION_NAMES[section]} ${TYPE_NAMES[type]}`}
      />
      <div className='flex flex-row py-4 overflow-auto gap-x-4'>
        {arr?.map((elem, index) => (
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
    </div>
  );
};
