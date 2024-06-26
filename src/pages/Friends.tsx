import { PosterDisplayMoviesSeries } from '../features/displayPostersSection/components/PosterDisplayMoviesSeries';
import { SearchAreaFriends } from '../features/searchArea/components/searchFriends/SearchAreaFriends';
import {
  useActiveFriends,
  useFetchFriendLikedMovies,
  useFetchFriendLikedSeries,
  useFetchFriendRatedMovies,
  useFetchFriendRatedSeries,
} from '../features/friends/hooks';
import { PosterDisplayFriends } from '../features/displayPostersSection/components/PosterDisplayFriends';
import { User } from '../features/displayPostersSection/types';
import { NoUser } from './NoUser';
import { useFirebaseContext } from '../features/context/FirebaseContext';

export const Friends = () => {
  const friendLikedMovies = useFetchFriendLikedMovies();
  const friendLikedSeries = useFetchFriendLikedSeries();
  const friendRatedMovies = useFetchFriendRatedMovies();
  const friendRatedSeries = useFetchFriendRatedSeries();
  const activeFriends = useActiveFriends() as User[];
  const { darkTheme } = useFirebaseContext();
  return (
    <>
      {friendLikedMovies &&
      friendLikedSeries &&
      friendRatedMovies.filteredMoviesList &&
      friendRatedSeries.filteredSeriesList &&
      activeFriends ? (
        <div className={darkTheme ? 'darkTheme' : 'theme'}>
          <SearchAreaFriends></SearchAreaFriends>
          <div className='p-8'>
            <h2 className='font-bold text-3xl'> Movies </h2>
            <PosterDisplayMoviesSeries
              arr={friendLikedMovies.slice(0, 19)}
              sectionName='Popular With Friends'
              type='movie'
              link='all/movie/Popular With Friends'
            />
            <PosterDisplayMoviesSeries
              arr={friendRatedMovies.filteredMoviesList}
              sectionName='Rated by Friends'
              type='movie'
              link='all/movie/Rated by Friends'
            />
            <h2 className='font-bold text-3xl'> Series </h2>
            <PosterDisplayMoviesSeries
              arr={friendLikedSeries}
              sectionName='Popular With Friends'
              type='series'
              link='all/series/Popular With Friends'
            />
            <PosterDisplayMoviesSeries
              arr={friendRatedSeries.filteredSeriesList}
              sectionName='Rated by Friends'
              type='series'
              link='all/series/Rated by Friends'
            />
            <PosterDisplayFriends users={activeFriends} sectionName='Active Friends' />
          </div>
        </div>
      ) : (
        <NoUser />
      )}
    </>
  );
};
