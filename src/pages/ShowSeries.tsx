// Hooks
// Components
import { Backdrop } from "../features/showMovieAndSeries/components/Backdrop";
import { Genres } from "../features/showMovieAndSeries/components/Genres";
import { Description } from "../features/showMovieAndSeries/components/Description";
import { LikeAndRate } from "../features/likeAndRate/components/LikeAndRate";
import { VisitHomepage } from "../features/showMovieAndSeries/components/VisitHomepage";
import { ProducedBy } from "../features/showMovieAndSeries/components/ProducedBy";
// Styles
import "../css/showMovie.css";
import {
  useBackdrop,
  useProductionCompanies,
} from "features/showMovieAndSeries/hooks";
import { DataNumbers } from "features/showMovieAndSeries/components/DataNumbers";
import { useSeriesData } from "features/series/hooks";

export const ShowSeries = () => {
  const seriesData = useSeriesData();
  const backdropImages = useBackdrop(seriesData);
  const productionCompanies = useProductionCompanies(seriesData);

  console.log(seriesData, "series");

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
