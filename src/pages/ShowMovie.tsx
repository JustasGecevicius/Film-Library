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
import {
  PosterDisplayPeople,
  PosterDisplayPeopleNoFetch,
} from '../features/displayPostersSection/components/PosterDisplayPeople';
import { Trailer } from '../features/showMovieAndSeries/components/Trailer';
import { PosterDisplayWatchProviders } from '../features/displayPostersSection/components/PosterDisplayWatchProviders';

export const ShowMovie = () => {
  const movieData = useMovieData();
  const backdropImages = useBackdrop(movieData);
  const productionCompanies = useProductionCompanies(movieData);
  const credits = useMovieSeriesCast('movie', movieData?.id);
  const watch = useWatchProviders(movieData?.id, 'movie');
  return (
    <div className='dark:bg-black'>
      {!!backdropImages && !!movieData && (
        <Backdrop
          backdrop={backdropImages.backdropURL}
          poster={backdropImages.posterURL}
          title={movieData.title}
          genres={movieData.genres}
        />
      )}
      <div className='flex-col max-w-4xl gap-4 mx-auto'>
        {!!movieData && (
          <>
            <LikeAndRate title={movieData.title} type='movie' />
            <Description overview={movieData.overview} />
            {movieData.homepage && <VisitHomepage link={movieData.homepage} />}
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
    </div>
  );
};
