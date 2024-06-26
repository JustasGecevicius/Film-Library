import { useFirebaseContext } from '../features/context/FirebaseContext';
import { Backdrop } from '../features/profile/components/backdrop/Backdrop';
import { Chart } from '../features/profile/components/chart/Chart';
import { useUserInfo, useUserLiked, useUserRated } from '../features/profile/hooks';
import { useSearchAreaImages } from '../features/searchArea/hooks';
import { PosterDisplayMoviesSeries } from '../features/displayPostersSection/components/PosterDisplayMoviesSeries';
import { NoUser } from './NoUser';
import { useParams } from 'react-router-dom';
import { useGetUser } from '../features/utils/user';

export const ShowUser = () => {
  const { db } = useFirebaseContext();
  const { id } = useParams();
  const userInfo = useGetUser(id);
  const userNumbers = useUserInfo(id, db);
  const links = useSearchAreaImages();
  const userLikedMovies = useUserLiked('movie', id);
  const userLikedSeries = useUserLiked('series', id);
  const userRatedMovies = useUserRated('movie', id);
  const userRatedSeries = useUserRated('series', id);
  const { darkTheme } = useFirebaseContext();
  return (
    <>
      {userNumbers &&
      links &&
      userLikedMovies &&
      userLikedSeries &&
      userRatedMovies &&
      userRatedSeries ? (
        <div className={darkTheme ? 'darkTheme' : 'theme'}>
          <Backdrop
            links={links}
            profileImage={userInfo?.profileURL}
            userName={userInfo?.displayName}
            userNumbers={userNumbers}
          />
          <div className='p-8'>
            <Chart id={userInfo?.uid} />
            {userLikedMovies && userLikedMovies.length !== 0 && (
              <>
                <h2 className='text-3xl font-bold'>Liked</h2>
                <PosterDisplayMoviesSeries
                  arr={userLikedMovies}
                  sectionName={'Movies'}
                  type={'movie'}
                  link='User/movie/Liked'
                />
              </>
            )}
            {userLikedSeries && userLikedSeries.length !== 0 && (
              <PosterDisplayMoviesSeries
                arr={userLikedSeries}
                sectionName={'Series'}
                type={'series'}
                link='User/series/Liked'
              />
            )}
            {userRatedMovies && userRatedMovies.length !== 0 && (
              <>
                <h2 className='text-3xl font-bold'>Rated</h2>
                <PosterDisplayMoviesSeries
                  arr={userRatedMovies}
                  sectionName={'Movies'}
                  type={'movie'}
                  link='User/movie/Rated'
                />
              </>
            )}
            {userRatedSeries && userRatedSeries.length !== 0 && (
              <PosterDisplayMoviesSeries
                arr={userRatedSeries}
                sectionName={'Series'}
                type={'series'}
                link='User/series/Rated'
              />
            )}
          </div>
        </div>
      ) : (
        <NoUser />
      )}
    </>
  );
};
