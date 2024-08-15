import { useFirebaseContext } from '../features/context/FirebaseContext';
import { Backdrop } from '../features/profile/components/backdrop/Backdrop';
import { Chart } from '../features/profile/components/chart/Chart';
import { useUserInfo, useUserLiked, useUserRated } from '../features/profile/hooks';
import { useSearchAreaImages } from '../features/searchArea/hooks';
import './css/userProfile.css';
import { PosterDisplayMoviesSeriesNoFetch } from '../features/displayPostersSection/components/PosterDisplayMoviesSeries';
import { NoUser } from './NoUser';

export const UserProfile = () => {
  const { userInfo, db } = useFirebaseContext();
  const userNumbers = useUserInfo(userInfo?.uid, db);
  const links = useSearchAreaImages();
  const userLikedMovies = useUserLiked('movie', userInfo?.uid);
  const userLikedSeries = useUserLiked('series', userInfo?.uid);
  const userRatedMovies = useUserRated('movie', userInfo?.uid);
  const userRatedSeries = useUserRated('series', userInfo?.uid);
  return userNumbers &&
    links &&
    userLikedMovies &&
    userLikedSeries &&
    userRatedMovies &&
    userRatedSeries &&
    userInfo ? (
    <div className='dark:bg-black'>
      <Backdrop
        links={links}
        profileImage={userInfo?.profileURL}
        userName={userInfo?.displayName}
        userNumbers={userNumbers}
      />
      <div className='p-8'>
        <Chart id={userInfo?.uid} />
        {!!userLikedMovies?.length && (
          <>
            <h2 className='text-3xl font-bold'>Liked</h2>
            <PosterDisplayMoviesSeriesNoFetch
              arr={userLikedMovies}
              section={'liked'}
              type={'movie'}
              link='user/movie/liked'
            />
          </>
        )}
        {!!userLikedSeries?.length && (
          <PosterDisplayMoviesSeriesNoFetch
            arr={userLikedSeries}
            section={'liked'}
            type={'series'}
            link='user/series/liked'
          />
        )}
        {!!userRatedMovies?.length && (
          <>
            <h2 className='text-3xl font-bold'>Rated</h2>
            <PosterDisplayMoviesSeriesNoFetch
              arr={userRatedMovies}
              section={'rated'}
              type={'movie'}
              link='user/movie/rated'
            />
          </>
        )}
        {!!userRatedSeries?.length && (
          <PosterDisplayMoviesSeriesNoFetch
            arr={userRatedSeries}
            section={'rated'}
            type={'series'}
            link='user/series/rated'
          />
        )}
      </div>
    </div>
  ) : (
    <NoUser />
  );
};
