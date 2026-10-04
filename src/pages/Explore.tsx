import { PosterDisplayMoviesSeries } from '../features/displayPostersSection/components/PosterDisplayMoviesSeries';
import { BounceLoader } from 'react-spinners';
import { useSearchAreaImages } from '../features/searchArea/hooks';
import { SearchArea } from '../features/searchArea/components/SearchArea';

export default function Explore() {
  const links = useSearchAreaImages();

  return links ? (
    <main className='min-h-screen text-white bg-zinc-950'>
      <SearchArea links={links} type='movieSeries' modern />
      <div className='w-full max-w-6xl px-4 py-10 mx-auto sm:py-14'>
        <section>
          <h2 className='text-3xl font-bold tracking-tight'>Movies</h2>
          <PosterDisplayMoviesSeries section='popular' type='movie' />
          <PosterDisplayMoviesSeries section='top' type='movie' />
        </section>

        <section className='mt-14'>
          <h2 className='text-3xl font-bold tracking-tight'>Series</h2>
          <PosterDisplayMoviesSeries section='popular' type='series' />
          <PosterDisplayMoviesSeries section='top' type='series' />
        </section>
      </div>
    </main>
  ) : (
    <div className='spinner'>
      <BounceLoader color='rgba(0, 0, 0, 1)' />
    </div>
  );
}
