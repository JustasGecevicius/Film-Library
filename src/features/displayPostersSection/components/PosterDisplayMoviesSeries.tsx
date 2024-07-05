import { PosterMovieSeries } from '../../poster/components/PosterMovieSeries';
import { Link } from 'react-router-dom';
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

type LinkType = {
  link: string;
};

export const PosterDisplayMoviesSeries = ({
  section,
  type,
  link,
  id,
}: MoviesPosterDisplayType & PosterType & LinkType) => {
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
    <div className='py-8 overflow-x-auto'>
      <div className='flex flex-row items-center justify-between'>
        <h2 className='text-2xl italic font-bold'>{`${SECTION_NAMES[section]} ${TYPE_NAMES[type]}`}</h2>
        <Link
          to={`/Film-Library/${link}`}
          className='border border-black rounded-full hover:outline-2 hover:outline-black hover:outline dark:border-white h-7'
        >
          <button className='h-full px-2 hover:font-bold'>View All</button>
        </Link>
      </div>
      <div
        className='flex flex-row py-4 overflow-auto gap-x-4'
        ref={(ref) => setDivElement(ref || undefined)}
      >
        {data?.map((elem, index) => {
          return (
            <PosterMovieSeries
              key={index}
              imageURL={elem.imageURL}
              title={elem.title}
              release_date={elem.release_date}
              id={elem.id}
              liked={elem.liked}
              rating={elem.rating}
              type={type}
            ></PosterMovieSeries>
          );
        })}
      </div>
    </div>
  );
};
