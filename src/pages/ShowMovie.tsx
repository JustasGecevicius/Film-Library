// Hooks
import { useParams } from "react-router-dom";
import { useBackdrop, useProductionCompanies } from "features/showMovie/hooks";
import { useQuery } from "react-query";
// API
import { getMovieData } from "../features/movies/api";
import { getConfig } from "features/config/api";
// Components
import { Backdrop } from "../features/showMovie/components/Backdrop";
import { Genres } from "../features/showMovie/components/Genres";
import { Description } from "../features/showMovie/components/Description";
import { LikeAndRate } from "../features/showMovie/components/LikeAndRate";
import { VisitHomepage } from "../features/showMovie/components/VisitHomepage";
import { MovieNumbers } from "../features/showMovie/components/MovieNumbers";
import { ProducedBy } from "../features/showMovie/components/ProducedBy";
// Styles
import "../css/showMovie.css";

export const ShowMovie = () => {
  //router Parameters
  const { movieId } = useParams();

  const { data: movieData } = useQuery(
    ["movie", movieId],
    () => {
      return getMovieData(movieId);
    },
    {
      enabled: !!movieId,
    }
  );
  const { data: config } = useQuery("config", getConfig);

  const backdropImages = useBackdrop(config, movieData);
  const productionCompanies = useProductionCompanies(config, movieData);

  if (movieId === undefined) return <></>;

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
          <LikeAndRate movieId={movieId} title={movieData["title"]} />
          <Description overview={movieData["overview"]} />
          {movieData["homepage"] ? (
            <VisitHomepage link={movieData["homepage"]} />
          ) : null}
          <MovieNumbers
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
