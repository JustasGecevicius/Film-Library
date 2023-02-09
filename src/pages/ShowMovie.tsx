// Hooks
import { useBackdrop, useMovieData, useProductionCompanies } from "features/showMovie/hooks";
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

  const movieData = useMovieData();
  const backdropImages = useBackdrop();
  const productionCompanies = useProductionCompanies();

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
          <LikeAndRate title={movieData["title"]} />
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
