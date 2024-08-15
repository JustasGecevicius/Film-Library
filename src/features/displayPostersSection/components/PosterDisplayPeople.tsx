import { useState } from 'react';
import { PeoplePoster } from '../../poster/components/PeoplePoster';
import { usePopularPeople } from '../../people/hooks';
import { useMemoDebounce } from '../../../hooks';
import {
  useElementScrollListener,
  useHorizontalScrollListenerCallback,
} from '../../displayAllPostersSection/hooks/scrollHooks';
import type { PersonObject } from '../types';
import { DisplayPosterHeader } from './helperComponents';

export const DISPLAY_PEOPLE_TYPES = {
  cast: 'Cast',
  pop: 'Popular',
} as const;

type PeoplePosterDisplayType = {
  type: keyof typeof DISPLAY_PEOPLE_TYPES;
  link: string;
};

export const PosterDisplayPeople = ({
  type,
  link,
}: PeoplePosterDisplayType) => {
  const [divElement, setDivElement] = useState<HTMLDivElement>();
  const { results: data, fetchNextPage } = usePopularPeople();

  const debouncedFetchNextPage = useMemoDebounce(fetchNextPage, 100);
  const listener = useHorizontalScrollListenerCallback(
    debouncedFetchNextPage,
    200,
    divElement
  );
  useElementScrollListener(listener, divElement);

  return (
    <>
      {data?.length !== 0 && (
        <div className='overflow-x-auto'>
          <DisplayPosterHeader
            link={`/film_library/all/people/${link}`}
            title={DISPLAY_PEOPLE_TYPES[type]}
          />
          <div
            className='flex flex-row py-4 overflow-auto gap-x-4'
            ref={(ref) => setDivElement(ref || undefined)}
          >
            {data?.map((elem, index) => {
              return (
                <PeoplePoster
                  key={index}
                  imageURL={elem.imageURL}
                  name={elem.name}
                  id={elem.id}
                />
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

export type PeoplePosterNoFetchDisplayType = {
  arr: PersonObject[];
  type: keyof typeof DISPLAY_PEOPLE_TYPES;
  link?: string;
};

export const PosterDisplayPeopleNoFetch = ({
  arr,
  type,
  link,
}: PeoplePosterNoFetchDisplayType) => {
  return (
    <>
      {!!arr?.length && (
        <div className='overflow-x-auto'>
          <DisplayPosterHeader
            link={`/film_library/all/people/${link}`}
            title={DISPLAY_PEOPLE_TYPES[type]}
          />
          <div className='flex flex-row py-4 overflow-auto gap-x-4'>
            {arr?.map((elem, index) => (
              <PeoplePoster
                key={index}
                imageURL={elem.imageURL}
                name={elem.name}
                id={elem.id}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
};
