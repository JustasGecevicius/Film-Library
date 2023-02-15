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
import { useMovieData } from "features/movies/hooks";

export const ShowMovie = () => {
  const movieData = useMovieData();
  const backdropImages = useBackdrop(movieData);
  const productionCompanies = useProductionCompanies(movieData);

  return (
    <>
      {backdropImages && movieData ? (
        <Backdrop
          backdrop={backdropImages["backdropURL"]}
          poster={backdropImages["posterURL"]}
          title={movieData["title"]}
        />
      ) : null}
      {movieData ? (
        <>
          <Genres genres={movieData["genres"]}></Genres>
          <LikeAndRate title={movieData["title"]} type="movie" />
          <Description overview={movieData["overview"]} />
          {movieData["homepage"] ? (
            <VisitHomepage link={movieData["homepage"]} />
          ) : null}
          <DataNumbers
            budget={movieData["budget"]}
            revenue={movieData["revenue"]}
            runtime={movieData["runtime"]}
            voteAverage={movieData["vote_average"]}
          />
          {productionCompanies ? (
            <ProducedBy productionCompanies={productionCompanies} />
          ) : null}
        </>
      ) : null}
    </>
  );
};
