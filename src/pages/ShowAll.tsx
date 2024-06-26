import { PosterDisplayAllPopular } from '../features/displayAllPostersSection/components/PosterDisplayAllPopular';
import { PosterDisplayAllTop } from '../features/displayAllPostersSection/components/PosterDisplayAllTop';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
// import './css/showAll.css';
import { PosterDisplayAllRecommended } from '../features/displayAllPostersSection/components/PosterDisplayAllRecommended';
import { PosterDisplayAllCredits } from '../features/displayAllPostersSection/components/PosterDisplayAllCredits';
import { useSearchAreaImages } from '../features/searchArea/hooks';
import { PosterDisplayAllFriendLiked } from '../features/displayAllPostersSection/components/PosterDisplayAllFriendLiked';
import { PosterDisplayAllFriendRated } from '../features/displayAllPostersSection/components/PosterDisplayAllFriendRated';
import { useFirebaseContext } from '../features/context/FirebaseContext';
import { SearchArea } from '../features/searchArea/components/SearchArea';

interface Params {
  section:
    | 'Top Rated'
    | 'Popular'
    | 'Recommended'
    | 'Credits'
    | 'Popular With Friends'
    | 'Rated by Friends'
    | undefined;
  type: 'movie' | 'series' | undefined;
  id?: number;
}

export const ShowAll = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const links = useSearchAreaImages();
  const { section, type, id } = useParams<keyof Params>() as Params;
  const { darkTheme } = useFirebaseContext();

  return (
    <div className={darkTheme ? 'darkTheme' : 'theme'}>
      <div className='showAll'>
        <SearchArea links={links} type={'movieSeries'} />
        <div className='posterDisplayAllWrapper'>
          <h2 className='sectionName'>{`${section} ${
            type === 'movie' ? 'movies' : 'series'
          }`}</h2>
          {section === 'Popular' && type && (
            <PosterDisplayAllPopular type={type} page={pageNumber} />
          )}
          {section === 'Top Rated' && type && (
            <PosterDisplayAllTop type={type} page={pageNumber} />
          )}
          {section === 'Recommended' && type && (
            <PosterDisplayAllRecommended type={type} page={pageNumber} id={id} />
          )}
          {section === 'Credits' && type && (
            <PosterDisplayAllCredits type={type} id={id} page={pageNumber} />
          )}
          {section === 'Popular With Friends' && type && (
            <PosterDisplayAllFriendLiked type={type} />
          )}
          {section === 'Rated by Friends' && type && (
            <PosterDisplayAllFriendRated type={type} />
          )}
          <button
            className='moreMovies'
            onClick={() => {
              setPageNumber((prev) => prev + 1);
            }}>
            More
          </button>
        </div>
      </div>
    </div>
  );
};
