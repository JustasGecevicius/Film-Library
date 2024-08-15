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

export const ShowSeries = () => {
  const seriesData = useSeriesData();
  const backdropImages = useBackdrop(seriesData);
  const productionCompanies = useProductionCompanies(seriesData);
  const credits = useMovieSeriesCast('series', seriesData?.id);

  return (
    <div className='dark:bg-black'>
      {!!backdropImages && !!seriesData && (
        <Backdrop
          backdrop={backdropImages.backdropURL}
          poster={backdropImages.posterURL}
          title={seriesData.name}
          genres={seriesData.genres}
        />
      )}
      <div className='flex-col max-w-4xl gap-4 mx-auto'>
        {!!seriesData && (
          <>
            <LikeAndRate title={seriesData.name} type='series' />
            <Description overview={seriesData.overview} />
            {seriesData.homepage && (
              <VisitHomepage link={seriesData.homepage} />
            )}
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
    </div>
  );
};
