import { PosterDisplayMoviesSeries } from '../features/displayPostersSection/components/PosterDisplayMoviesSeries';
import { BounceLoader } from 'react-spinners';
import { useSearchAreaImages } from '../features/searchArea/hooks';
import { SearchArea } from '../features/searchArea/components/SearchArea';

export default function Explore() {
  const links = useSearchAreaImages();

  return links ? (
    <div className='dark:bg-black'>
      <SearchArea links={links} type={'movieSeries'} />
      <div className='p-8'>
        <h2 className='text-3xl font-bold'>Movies</h2>
        <PosterDisplayMoviesSeries section='popular' type='movie' />
        <PosterDisplayMoviesSeries section='top' type='movie' />
        <h2 className='text-3xl font-bold'>Series</h2>
        <PosterDisplayMoviesSeries section='popular' type='series' />
        <PosterDisplayMoviesSeries section='top' type='series' />
      </div>
    </div>
  ) : (
    <div className='spinner'>
      <BounceLoader color='rgba(0, 0, 0, 1)' />
    </div>
  );
};
