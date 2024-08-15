import { PosterDisplayAllPopular } from '../features/displayAllPostersSection/components/PosterDisplayAllPopular';
import { PosterDisplayAllTop } from '../features/displayAllPostersSection/components/PosterDisplayAllTop';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { PosterDisplayAllRecommended } from '../features/displayAllPostersSection/components/PosterDisplayAllRecommended';
import { PosterDisplayAllCredits } from '../features/displayAllPostersSection/components/PosterDisplayAllCredits';
import { useSearchAreaImages } from '../features/searchArea/hooks';
import { PosterDisplayAllFriendLiked } from '../features/displayAllPostersSection/components/PosterDisplayAllFriendLiked';
import { PosterDisplayAllFriendRated } from '../features/displayAllPostersSection/components/PosterDisplayAllFriendRated';
import { SearchArea } from '../features/searchArea/components/SearchArea';
import { PosterDisplayAllCast } from '../features/displayAllPostersSection/components/PosterDisplayAllCast';
import {
  SECTION_NAMES,
  TYPE_NAMES,
} from '../features/displayPostersSection/constants/sections';
import { PosterDisplayAllPopularPeople } from '../features/displayAllPostersSection/components/PosterDisplayAllPopularPeople';
import { BASIC_TYPES } from '../App';
import { upperFirst } from 'lodash';

type MovieSeriesProps = {
  type?: 'top' | 'popular' | 'recommended' | 'credits';
  element?: 'movie' | 'series';
  id?: string;
};

const DisplayAllSwitch = (props: MovieSeriesProps & { pageNumber: number }) => {
  const { type, element, pageNumber, id } = props;
  console.log(props, 'PROPS');
  if (!type || !element) return null;

  switch (type) {
    case 'popular':
      return <PosterDisplayAllPopular type={element} />;
    case 'top':
      return <PosterDisplayAllTop type={element} />;
    case 'recommended':
      return (
        <PosterDisplayAllRecommended type={element} page={pageNumber} id={id} />
      );
    case 'credits':
      return (
        <PosterDisplayAllCredits type={element} id={id} page={pageNumber} />
      );
    // case 'popular_friends':
    //   return <PosterDisplayAllFriendLiked type={element} />;
    // case 'rated_friends':
    //   return <PosterDisplayAllFriendRated type={element} />;
    default:
      return null;
  }
};

export const ShowAll = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const links = useSearchAreaImages();
  const { element = '', type = '', id = '' } = useParams();

  if (!type || !element) return null;

  const getTypeName = () => {
    // @ts-ignore
    if (!BASIC_TYPES.includes(type)) return '';
    return upperFirst(type);
  };

  return (
    <div className='dark:bg-black'>
      <SearchArea links={links} type={'movieSeries'} />
      <div className='flex-col gap-4 p-8'>
        <h2 className='text-2xl font-bold'>{`${getTypeName()} ${TYPE_NAMES[element]}`}</h2>
        <DisplayAllSwitch
          type={type}
          id={id}
          element={element}
          pageNumber={pageNumber}
        />
        <button
          className='moreMovies'
          onClick={() => {
            setPageNumber((prev) => prev + 1);
          }}
        >
          More
        </button>
      </div>
    </div>
  );
};

type PeopleRouterProps = {
  type: string;
};

const DisplayAllPeopleSwitch = (
  props: PeopleRouterProps & { pageNumber: number }
) => {
  const { type } = props;

  if (!type) return null;

  switch (type) {
    case 'popular':
      return <PosterDisplayAllPopularPeople />;
    case 'cast':
      return <PosterDisplayAllCast />;
    // case 'friends':
    //   return <PosterDisplayAllFriendLiked type={element} />;
    default:
      return null;
  }
};

export const ShowAllPeople = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const links = useSearchAreaImages();
  const { type = '' } = useParams<{ [key: string]: string }>();

  if (!type) return null;

  const getSectionName = () => {
    if (!Object.keys(SECTION_NAMES).includes(type)) return '';
    else return SECTION_NAMES[type as keyof typeof SECTION_NAMES];
  };

  const getTypeName = () => {
    return '';
    // if (!Object.keys(TYPE_NAMES).includes(element)) return '';
    // else return TYPE_NAMES[element as keyof typeof TYPE_NAMES];
  };

  return (
    <div className='min-h-screen dark:bg-black'>
      <SearchArea links={links} type={'movieSeries'} />
      <div className='flex-col gap-4 p-8'>
        <h2 className='text-2xl font-bold'>{`${getSectionName()} ${getTypeName()}`}</h2>
        <DisplayAllPeopleSwitch type={type} pageNumber={pageNumber} />
        <button
          className='moreMovies'
          onClick={() => {
            setPageNumber((prev) => prev + 1);
          }}
        >
          More
        </button>
      </div>
    </div>
  );
};
