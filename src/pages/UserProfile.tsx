import { useFirebaseContext } from '../features/context/FirebaseContext';
import { Backdrop } from '../features/profile/components/backdrop/Backdrop';
import { Chart } from '../features/profile/components/chart/Chart';
import { useUserInfo, useUserLiked, useUserRated } from '../features/profile/hooks';
import { useSearchAreaImages } from '../features/searchArea/hooks';
import '../features/profile/css/backdrop.css';
import './css/userProfile.css';
import { PosterDisplayMoviesSeries } from '../features/displayPostersSection/components/PosterDisplayMoviesSeries';
import { NoUser } from './NoUser';

export const UserProfile = () => {
  const { userInfo, db } = useFirebaseContext();
  const userNumbers = useUserInfo(userInfo?.uid, db);
  const links = useSearchAreaImages();
  const userLikedMovies = useUserLiked('movie', userInfo?.uid);
  const userLikedSeries = useUserLiked('series', userInfo?.uid);
  const userRatedMovies = useUserRated('movie', userInfo?.uid);
  const userRatedSeries = useUserRated('series', userInfo?.uid);
  const { darkTheme } = useFirebaseContext();
  return (
    <>
      {userNumbers &&
      links &&
      userLikedMovies &&
      userLikedSeries &&
      userRatedMovies &&
      userRatedSeries &&
      userInfo ? (
        <div className={darkTheme ? 'darkTheme' : 'theme'}>
          <div className='userProfile'>
            <Backdrop
              links={links}
              profileImage={userInfo?.profileURL}
              userName={userInfo?.displayName}
              userNumbers={userNumbers}
            />
            <div className='posterDisplaysWrapper'>
              <div className='chart'>
                <Chart id={userInfo?.uid} />
              </div>
              {userLikedMovies && userLikedMovies.length !== 0 && (
                <>
                  <h2 className='typeName'>Liked</h2>
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
                  <h2 className='typeName'>Rated</h2>
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
        </div>
      ) : (
        <NoUser />
      )}
    </>
  );
};
