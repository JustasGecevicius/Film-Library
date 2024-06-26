import { PosterDisplayMoviesSeries } from '../features/displayPostersSection/components/PosterDisplayMoviesSeries';
import { useTop } from '../features/topRated/hooks';
import { usePopular } from '../features/popular/hooks';
import { BounceLoader } from 'react-spinners';
import { useSearchAreaImages } from '../features/searchArea/hooks';
import { useFirebaseContext } from '../features/context/FirebaseContext';
import { SearchArea } from '../features/searchArea/components/SearchArea';

export const Explore = () => {
  const topMovies = useTop('movie');
  const trendingMovies = usePopular('movie');
  const topSeries = useTop('series');
  const popularSeries = usePopular('series');
  const links = useSearchAreaImages();

  return (
    <>
      {topMovies && trendingMovies && topSeries && popularSeries && links ? (
        <div className='dark:bg-black'>
          <SearchArea links={links} type={'movieSeries'} />
          <div className='p-8'>
            <h2 className='text-3xl font-bold'>Movies</h2>
            <PosterDisplayMoviesSeries
              arr={trendingMovies}
              sectionName='Popular'
              type='movie'
              link='all/movie/Popular'
            />
            <PosterDisplayMoviesSeries
              arr={topMovies}
              sectionName='Top Rated'
              type='movie'
              link='all/movie/Top Rated'
            />
            <h2 className='text-3xl font-bold'>Series</h2>
            <PosterDisplayMoviesSeries
              arr={popularSeries}
              sectionName='Popular'
              type='series'
              link='all/series/Popular'
            />
            <PosterDisplayMoviesSeries
              arr={topSeries}
              sectionName='Top Rated'
              type='series'
              link='all/series/Top Rated'
            />
          </div>
        </div>
      ) : (
        <div className='spinner'>
          <BounceLoader color='rgba(0, 0, 0, 1)' />
        </div>
      )}
    </>
  );
};
