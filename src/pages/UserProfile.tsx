import { useFirebaseContext } from '../features/context/FirebaseContext';
import { Backdrop } from '../features/profile/components/backdrop/Backdrop';
import { Chart } from '../features/profile/components/chart/Chart';
import {
  useUserInfo,
  useUserLiked,
  useUserRated,
  useUserWished,
} from '../features/profile/hooks';
import { useSearchAreaImages } from '../features/searchArea/hooks';
import './css/userProfile.css';
import { PosterDisplayMoviesSeriesNoFetch } from '../features/displayPostersSection/components/PosterDisplayMoviesSeries';
import { NoUser } from './NoUser';

export default function UserProfile() {
  const { userInfo, db } = useFirebaseContext();
  const userNumbers = useUserInfo(userInfo?.uid, db);
  const links = useSearchAreaImages();
  const userLikedMovies = useUserLiked('movie', userInfo?.uid);
  const userLikedSeries = useUserLiked('series', userInfo?.uid);
  const userRatedMovies = useUserRated('movie', userInfo?.uid);
  const userRatedSeries = useUserRated('series', userInfo?.uid);
  const wishedMovies = useUserWished('movie', userInfo?.uid);
  const wishedSeries = useUserWished('series', userInfo?.uid);

  return userNumbers && links && userInfo ? (
    <div className='dark:bg-black'>
      <Backdrop
        links={links}
        profileImage={userInfo?.profileURL}
        userName={userInfo?.displayName}
        userNumbers={userNumbers}
      />
      <div className='p-8'>
        <Chart id={userInfo?.uid} />
        {!!wishedMovies?.length && (
          <>
            <h2 className='text-3xl font-bold'>Watch later</h2>
            <PosterDisplayMoviesSeriesNoFetch
              arr={wishedMovies}
              section='wished'
              type='movie'
              link=''
              viewAll={false}
            />
          </>
        )}
        {!!wishedSeries?.length && (
          <PosterDisplayMoviesSeriesNoFetch
            arr={wishedSeries}
            section='wished'
            type='series'
            link=''
            viewAll={false}
          />
        )}
        {!!userLikedMovies?.length && (
          <>
            <h2 className='text-3xl font-bold'>Liked</h2>
            <PosterDisplayMoviesSeriesNoFetch
              arr={userLikedMovies}
              section={'liked'}
              type={'movie'}
              link='user/movie/liked'
              viewAll={false}
            />
          </>
        )}
        {!!userLikedSeries?.length && (
          <PosterDisplayMoviesSeriesNoFetch
            arr={userLikedSeries}
            section={'liked'}
            type={'series'}
            link='user/series/liked'
            viewAll={false}
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
              viewAll={false}
            />
          </>
        )}
        {!!userRatedSeries?.length && (
          <PosterDisplayMoviesSeriesNoFetch
            arr={userRatedSeries}
            section={'rated'}
            type={'series'}
            link='user/series/rated'
            viewAll={false}
          />
        )}
      </div>
    </div>
  ) : (
    <NoUser />
  );
};
