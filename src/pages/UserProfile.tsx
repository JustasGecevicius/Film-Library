import { useFirebaseContext } from '../features/context/FirebaseContext';
import { Backdrop } from '../features/profile/components/backdrop/Backdrop';
import { Chart } from '../features/profile/components/chart/Chart';
import {
  useUserInfo,
  useUserLiked,
  useUserRated,
  useUserWished,
} from '../features/profile/hooks';
import './css/userProfile.css';
import { PosterDisplayMoviesSeriesNoFetch } from '../features/displayPostersSection/components/PosterDisplayMoviesSeries';
import { NoUser } from './NoUser';

export default function UserProfile() {
  const { userInfo, db } = useFirebaseContext();
  const userNumbers = useUserInfo(userInfo?.uid, db);
  const userLikedMovies = useUserLiked('movie', userInfo?.uid);
  const userLikedSeries = useUserLiked('series', userInfo?.uid);
  const userRatedMovies = useUserRated('movie', userInfo?.uid);
  const userRatedSeries = useUserRated('series', userInfo?.uid);
  const wishedMovies = useUserWished('movie', userInfo?.uid);
  const wishedSeries = useUserWished('series', userInfo?.uid);

  const libraryOverview = [
    {
      label: 'Average Movie Rating',
      value: userNumbers?.averageMovieRating ?? 0,
    },
    {
      label: 'Average Series Rating',
      value: userNumbers?.averageSeriesRating ?? 0,
    },
    { label: 'Movies Liked', value: userNumbers?.numberOfLikedMovies ?? 0 },
    { label: 'Series Liked', value: userNumbers?.numberOfLikedSeries ?? 0 },
  ];

  return userNumbers && userInfo ? (
    <main className='min-h-screen text-white bg-zinc-950'>
      <Backdrop
        profileImage={userInfo?.profileURL}
        userName={userInfo?.displayName}
        userNumbers={userNumbers}
      />

      <div className='w-full max-w-6xl px-4 py-10 mx-auto sm:py-14'>
        <section className='grid gap-5 lg:grid-cols-3'>
          <div className='lg:col-span-2'>
            <Chart id={userInfo.uid} />
          </div>

          <div className='p-6 border shadow-xl rounded-3xl border-white/10 bg-white/5 sm:p-8'>
            <h2 className='mb-6 text-2xl font-bold'>Library overview</h2>
            <div className='flex flex-col gap-3'>
              {libraryOverview.map(({ label, value }) => (
                <div
                  className='flex items-center justify-between gap-4 p-4 border rounded-xl border-white/10 bg-black/20'
                  key={label}
                >
                  <span className='text-sm text-white/70'>{label}</span>
                  <strong className='text-xl'>{value}</strong>
                </div>
              ))}
            </div>
          </div>
        </section>

        {!!(wishedMovies?.length || wishedSeries?.length) && (
          <section className='mt-14'>
            <h2 className='text-3xl font-bold tracking-tight'>Watch later</h2>
            {!!wishedMovies?.length && (
              <PosterDisplayMoviesSeriesNoFetch
                arr={wishedMovies}
                section='wished'
                type='movie'
                link=''
                viewAll={false}
              />
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
          </section>
        )}
        {!!(userLikedMovies?.length || userLikedSeries?.length) && (
          <section className='mt-14'>
            <h2 className='text-3xl font-bold tracking-tight'>Liked</h2>
            {!!userLikedMovies?.length && (
              <PosterDisplayMoviesSeriesNoFetch
                arr={userLikedMovies}
                section='liked'
                type='movie'
                link='user/movie/liked'
                viewAll={false}
              />
            )}
            {!!userLikedSeries?.length && (
              <PosterDisplayMoviesSeriesNoFetch
                arr={userLikedSeries}
                section='liked'
                type='series'
                link='user/series/liked'
                viewAll={false}
              />
            )}
          </section>
        )}
        {!!(userRatedMovies?.length || userRatedSeries?.length) && (
          <section className='mt-14'>
            <h2 className='text-3xl font-bold tracking-tight'>Rated</h2>
            {!!userRatedMovies?.length && (
              <PosterDisplayMoviesSeriesNoFetch
                arr={userRatedMovies}
                section='rated'
                type='movie'
                link='user/movie/rated'
                viewAll={false}
              />
            )}
            {!!userRatedSeries?.length && (
              <PosterDisplayMoviesSeriesNoFetch
                arr={userRatedSeries}
                section='rated'
                type='series'
                link='user/series/rated'
                viewAll={false}
              />
            )}
          </section>
        )}
      </div>
    </main>
  ) : (
    <NoUser />
  );
}
