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
  useMovieSeriesCast,
  useProductionCompanies,
  useRecommended,
  useWatchProviders,
} from "features/showMovieAndSeries/hooks";
import { useMovieData } from "features/movies/hooks";
import { PosterDisplayMoviesSeries } from "features/displayPostersSection/components/PosterDisplayMoviesSeries";
import { PosterDisplayPeople } from "features/displayPostersSection/components/PosterDisplayPeople";
import { Trailer } from "features/showMovieAndSeries/components/Trailer";
import { PosterDisplayWatchProviders } from "features/displayPostersSection/components/PosterDisplayWatchProviders";
import { useFirebaseContext } from "features/context/FirebaseContext";

export const ShowMovie = () => {
  // Getting the movie data, backdrop Images and production companies.
  const movieData = useMovieData();
  const backdropImages = useBackdrop(movieData);
  const productionCompanies = useProductionCompanies(movieData);
  const recommendations = useRecommended(movieData?.id, 1, "movie");
  const credits = useMovieSeriesCast("movie", movieData?.id);
  const watch = useWatchProviders(movieData?.id, "movie");
  const {darkTheme} = useFirebaseContext();
  return (
    
    <div className={darkTheme ? "darkTheme" : "theme"}>
      {backdropImages && movieData && (
        <Backdrop
          backdrop={backdropImages.backdropURL}
          poster={backdropImages.posterURL}
          title={movieData.title}
        />
      )}
      {movieData && (
        <>
          <Genres genres={movieData.genres}/>
          <LikeAndRate title={movieData.title} type="movie" />
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
      {productionCompanies && productionCompanies.length !== 0 && (
        <ProducedBy productionCompanies={productionCompanies} />
      )}
      {movieData && (
        <Trailer name={movieData?.title} year={movieData.release_date} />
      )}
      {recommendations && recommendations.length !== 0 && (
        <div className="recommendationDiv">
          <PosterDisplayMoviesSeries
            arr={recommendations}
            sectionName="Recommended"
            type="movie"
            id={movieData?.id}
            link={`all/movie/Recommended/${movieData?.id}`}
          />
        </div>
      )}
      {credits && credits.length !== 0 && (
        <div className="recommendationDiv">
          <PosterDisplayPeople arr={credits} sectionName="Cast" link={`movie/Cast/${movieData?.id}`}/>
        </div>
      )}
      {watch && (
        <div className="recommendationDiv">
          <PosterDisplayWatchProviders
            arr={watch}
            sectionName="Service Providers"
          />
        </div>
      )}
    </div>
  );
};
