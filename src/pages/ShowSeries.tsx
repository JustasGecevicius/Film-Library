// Components
import { Backdrop } from "../features/showMovieAndSeries/components/Backdrop";
import { Genres } from "../features/showMovieAndSeries/components/Genres";
import { Description } from "../features/showMovieAndSeries/components/Description";
import { LikeAndRate } from "../features/likeAndRate/components/LikeAndRate";
import { VisitHomepage } from "../features/showMovieAndSeries/components/VisitHomepage";
import { ProducedBy } from "../features/showMovieAndSeries/components/ProducedBy";
import { DataNumbers } from "features/showMovieAndSeries/components/DataNumbers";
// Styles
import "../css/showMovie.css";
// Hooks
import {
  useBackdrop,
  useProductionCompanies,
} from "features/showMovieAndSeries/hooks";
import { useSeriesData } from "features/series/hooks";

export const ShowSeries = () => {

  // Getting series data, backdrop images and the production companies
  const seriesData = useSeriesData();
  const backdropImages = useBackdrop(seriesData);
  const productionCompanies = useProductionCompanies(seriesData);

  return (
    <>
      {backdropImages && seriesData ? (
        <Backdrop
          backdrop={backdropImages["backdropURL"]}
          poster={backdropImages["posterURL"]}
          title={seriesData["name"]}
        />
      ) : null}
      {seriesData ? (
        <>
          <Genres genres={seriesData["genres"]}></Genres>
          <LikeAndRate title={seriesData["name"]} type="series" />
          <Description overview={seriesData["overview"]} />
          {seriesData["homepage"] ? (
            <VisitHomepage link={seriesData["homepage"]} />
          ) : null}
          <DataNumbers
            voteAverage={seriesData["vote_average"]}
            last_air_date={seriesData.last_air_date}
            number_of_episodes={seriesData.number_of_episodes}
            number_of_seasons={seriesData.number_of_seasons}
          />
          {productionCompanies ? (
            <ProducedBy productionCompanies={productionCompanies} />
          ) : null}
        </>
      ) : null}
    </>
  );
};
