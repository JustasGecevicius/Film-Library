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
} from '../features/showMovieAndSeries/hooks';
import { useSeriesData } from '../features/series/hooks';
import { PosterDisplayMoviesSeries } from '../features/displayPostersSection/components/PosterDisplayMoviesSeries';
import { PosterDisplayPeopleNoFetch } from '../features/displayPostersSection/components/PosterDisplayPeople';
import { Trailer } from '../features/showMovieAndSeries/components/Trailer';
import { WatchLaterButton } from '../features/watchLater/components/WatchLaterButton';

export default function ShowSeries() {
  const seriesData = useSeriesData();
  const backdropImages = useBackdrop(seriesData);
  const productionCompanies = useProductionCompanies(seriesData);
  const credits = useMovieSeriesCast('series', seriesData?.id);

  return (
    <main className='min-h-screen text-white bg-zinc-950'>
      {!!backdropImages && !!seriesData && (
        <Backdrop
          backdrop={backdropImages.backdropURL}
          poster={backdropImages.posterURL}
          title={seriesData.name}
          genres={seriesData.genres}
        />
      )}
      <div className='w-full max-w-6xl px-4 py-10 mx-auto space-y-8 sm:py-14'>
        {!!seriesData && (
          <>
            <section className='flex flex-wrap items-center gap-3'>
              <LikeAndRate title={seriesData.name} type='series' />
              <WatchLaterButton title={seriesData.name} type='series' />
              {seriesData.homepage && (
                <VisitHomepage link={seriesData.homepage} />
              )}
            </section>
            <Description overview={seriesData.overview} />
            <DataNumbers
              voteAverage={seriesData.vote_average}
              last_air_date={seriesData.last_air_date}
              number_of_episodes={seriesData.number_of_episodes}
              number_of_seasons={seriesData.number_of_seasons}
            />
          </>
        )}
        {!!productionCompanies && (
          <ProducedBy productionCompanies={productionCompanies} />
        )}
        {!!seriesData && (
          <Trailer name={seriesData?.name} year={seriesData.first_air_date} />
        )}
        {!!seriesData?.id && (
          <PosterDisplayMoviesSeries
            section='recommended'
            type='series'
            id={seriesData?.id}
          />
        )}
        {!!credits?.length && (
          <PosterDisplayPeopleNoFetch arr={credits} type='cast' link='Cast' />
        )}
      </div>
    </main>
  );
}
