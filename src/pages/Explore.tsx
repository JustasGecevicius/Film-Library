// Components
import { PosterDisplayMoviesSeries } from "features/displayPostersSection/components/PosterDisplayMoviesSeries";
import { SearchAreaMoviesSeries } from "features/searchArea/components/searchMoviesSeries/SearchAreaMoviesSeries";
// Styles
import "pages/css/explore.css";
// Hooks
import { useTop } from "features/topRated/hooks";
import { usePopular } from "features/popular/hooks";
import { BounceLoader } from "react-spinners";
import { useSearchAreaImages } from "features/searchArea/hooks";

export const Explore = () => {
  // Getting all the movie information to display
  const topMovies = useTop("movie");
  const trendingMovies = usePopular("movie");
  const topSeries = useTop("series");
  const popularSeries = usePopular("series");
  const links = useSearchAreaImages();

  return (
    <>
      {topMovies && trendingMovies && topSeries && popularSeries && links ? (
        <>
          <SearchAreaMoviesSeries links={links}/>
          <div className="explore">
            <h2 className="typeName">Movies</h2>

            <PosterDisplayMoviesSeries
              arr={trendingMovies}
              sectionName="Popular"
              type="movie"
            />

            <PosterDisplayMoviesSeries
              arr={topMovies}
              sectionName="Top Rated"
              type="movie"
            />

            <h2 className="typeName">Series</h2>

            <PosterDisplayMoviesSeries
              arr={popularSeries}
              sectionName="Popular"
              type="series"
            />

            <PosterDisplayMoviesSeries
              arr={topSeries}
              sectionName="Top Rated"
              type="series"
            />
          </div>
        </>
      ) : <BounceLoader color="rgba(0, 0, 0, 1)" />}
    </>
  );
};
