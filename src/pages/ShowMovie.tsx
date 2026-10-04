import { Backdrop } from '../features/showMovieAndSeries/components/Backdrop';
import { Description } from '../features/showMovieAndSeries/components/Description';
import { LikeAndRate } from '../features/likeAndRate/components/LikeAndRate';
import { VisitHomepage } from '../features/showMovieAndSeries/components/VisitHomepage';
import { ProducedBy } from '../features/showMovieAndSeries/components/ProducedBy';
import { DataNumbers } from '../features/showMovieAndSeries/components/DataNumbers';
import {
  useBackdrop,
  useMovieSeriesCast,
  useProductionCompanies,
  useWatchProviders,
} from '../features/showMovieAndSeries/hooks';
import { useMovieData } from '../features/movies/hooks';
import { PosterDisplayMoviesSeries } from '../features/displayPostersSection/components/PosterDisplayMoviesSeries';
import { PosterDisplayPeopleNoFetch } from '../features/displayPostersSection/components/PosterDisplayPeople';
import { Trailer } from '../features/showMovieAndSeries/components/Trailer';
import { PosterDisplayWatchProviders } from '../features/displayPostersSection/components/PosterDisplayWatchProviders';
import { WatchLaterButton } from '../features/watchLater/components/WatchLaterButton';

export default function ShowMovie() {
  const movieData = useMovieData();
  const backdropImages = useBackdrop(movieData);
  const productionCompanies = useProductionCompanies(movieData);
  const credits = useMovieSeriesCast('movie', movieData?.id);
  const watch = useWatchProviders(movieData?.id, 'movie');
  return (
    <main className='min-h-screen text-white bg-zinc-950'>
      {!!backdropImages && !!movieData && (
        <Backdrop
          backdrop={backdropImages.backdropURL}
          poster={backdropImages.posterURL}
          title={movieData.title}
          genres={movieData.genres}
        />
      )}
      <div className='w-full max-w-6xl px-4 py-10 mx-auto space-y-8 sm:py-14'>
        {!!movieData && (
          <>
            <section className='flex flex-wrap items-center gap-3'>
              <LikeAndRate title={movieData.title} type='movie' />
              <WatchLaterButton title={movieData.title} type='movie' />
              {movieData.homepage && (
                <VisitHomepage link={movieData.homepage} />
              )}
            </section>
            <Description overview={movieData.overview} />
            <DataNumbers
              budget={movieData.budget}
              revenue={movieData.revenue}
              runtime={movieData.runtime}
              voteAverage={movieData.vote_average}
            />
          </>
        )}
        {!!productionCompanies?.length && (
          <ProducedBy productionCompanies={productionCompanies} />
        )}
        {!!movieData && (
          <Trailer name={movieData?.title} year={movieData.release_date} />
        )}
        {!!movieData?.id && (
          <PosterDisplayMoviesSeries
            section='recommended'
            type='movie'
            id={movieData?.id}
          />
        )}
        {!!credits?.length && (
          <PosterDisplayPeopleNoFetch
            arr={credits}
            type='cast'
            link={`cast/movie/${movieData?.id}`}
          />
        )}
        {!!watch && (
          <PosterDisplayWatchProviders
            arr={watch}
            sectionName='Service Providers'
          />
        )}
      </div>
    </main>
  );
}
