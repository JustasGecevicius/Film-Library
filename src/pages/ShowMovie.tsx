// Components
import { Backdrop } from "../features/showMovieAndSeries/components/Backdrop";
import { Genres } from "../features/showMovieAndSeries/components/Genres";
import { Description } from "../features/showMovieAndSeries/components/Description";
import { LikeAndRate } from "../features/likeAndRate/components/LikeAndRate";
import { VisitHomepage } from "../features/showMovieAndSeries/components/VisitHomepage";
import { ProducedBy } from "../features/showMovieAndSeries/components/ProducedBy";
import { DataNumbers } from "features/showMovieAndSeries/components/DataNumbers";

// Styles
import "pages/css/showMovie.css";
// Hooks
import {
  useBackdrop,
  useProductionCompanies,
  useRecommended,
} from "features/showMovieAndSeries/hooks";
import { useMovieData } from "features/movies/hooks";
import { PosterDisplayMoviesSeries } from "features/displayPostersSection/components/PosterDisplayMoviesSeries";

export const ShowMovie = () => {
  // Getting the movie data, backdrop Images and production companies.
  const movieData = useMovieData();
  const backdropImages = useBackdrop(movieData);
  const productionCompanies = useProductionCompanies(movieData);
  const recommendations = useRecommended(movieData?.id, 1, "movie");
  console.log(recommendations);

  return (
    <>
      {backdropImages && movieData && (
        <Backdrop
          backdrop={backdropImages["backdropURL"]}
          poster={backdropImages["posterURL"]}
          title={movieData["title"]}
        />
      )}
      {movieData && (
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
          {productionCompanies && (
            <ProducedBy productionCompanies={productionCompanies} />
          )}
        </>
      )}
      {recommendations && (
        <div className="recommendationDiv">
          <PosterDisplayMoviesSeries
            arr={recommendations}
            sectionName="Recommended"
            type="movie"
            id={movieData?.id}
          />
        </div>
      )}
    </>
  );
};
