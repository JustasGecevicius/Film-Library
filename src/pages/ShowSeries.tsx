// Components
import { Backdrop } from "../features/showMovieAndSeries/components/Backdrop";
import { Genres } from "../features/showMovieAndSeries/components/Genres";
import { Description } from "../features/showMovieAndSeries/components/Description";
import { LikeAndRate } from "../features/likeAndRate/components/LikeAndRate";
import { VisitHomepage } from "../features/showMovieAndSeries/components/VisitHomepage";
import { ProducedBy } from "../features/showMovieAndSeries/components/ProducedBy";
import { DataNumbers } from '../features/showMovieAndSeries/components/DataNumbers';
// Styles
import './css/showMovie.css';
// Hooks
import {
  useBackdrop,
  useMovieSeriesCast,
  useProductionCompanies,
  useRecommended,
} from '../features/showMovieAndSeries/hooks';
import { useSeriesData } from '../features/series/hooks';
import { PosterDisplayMoviesSeries } from '../features/displayPostersSection/components/PosterDisplayMoviesSeries';
import { PosterDisplayPeople } from '../features/displayPostersSection/components/PosterDisplayPeople';
import { Trailer } from '../features/showMovieAndSeries/components/Trailer';
import { useFirebaseContext } from '../features/context/FirebaseContext';

export const ShowSeries = () => {
  // Getting series data, backdrop images and the production companies
  const seriesData = useSeriesData();
  const backdropImages = useBackdrop(seriesData);
  const productionCompanies = useProductionCompanies(seriesData);
  const recommendations = useRecommended(seriesData?.id, 1, "series");
  const credits = useMovieSeriesCast("series", seriesData?.id);
  const {darkTheme} = useFirebaseContext();
  
  return (
    <div className={darkTheme ? "darkTheme" : "theme"}>
      {backdropImages && seriesData ? (
        <Backdrop
          backdrop={backdropImages.backdropURL}
          poster={backdropImages.posterURL}
          title={seriesData.name}
        />
      ) : null}
      {seriesData ? (
        <>
          <Genres genres={seriesData.genres}/>
          <LikeAndRate title={seriesData.name} type="series" />
          <Description overview={seriesData.overview} />
          {seriesData.homepage && <VisitHomepage link={seriesData.homepage} />}
          <DataNumbers
            voteAverage={seriesData.vote_average}
            last_air_date={seriesData.last_air_date}
            number_of_episodes={seriesData.number_of_episodes}
            number_of_seasons={seriesData.number_of_seasons}
          />
          {productionCompanies ? (
            <ProducedBy productionCompanies={productionCompanies} />
          ) : null}
        </>
      ) : null}
      {seriesData && (
        <Trailer name={seriesData?.name} year={seriesData.first_air_date} />
      )}
      {recommendations && (
        <div className="recommendationDiv">
          <PosterDisplayMoviesSeries
            arr={recommendations}
            sectionName="Recommended"
            type="series"
            id={seriesData?.id}
            link={`all/series/Recommended/${seriesData?.id}`}
          />
        </div>
      )}
      {credits && credits.length !== 0 && (
        <div className="recommendationDiv">
          <PosterDisplayPeople arr={credits} sectionName="Cast" link="Cast"/>
        </div>
      )}
    </div>
  );
};
