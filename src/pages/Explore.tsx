// Components
import { PosterDisplayMovies } from "features/displayPostersSection/components/PosterDisplayMovies";
import { SearchAreaMoviesSeries } from "features/searchArea/components/searchMoviesSeries/SearchAreaMoviesSeries";
// Styles
import "../css/explore.css";
// Hooks
import { useTop } from "features/topRated/hooks";
import { usePopular } from "features/popular/hooks";

export const Explore = () => {
  // Getting all the movie information to display
  const topMovies = useTop("movie");
  const trendingMovies = usePopular("movie");
  const topSeries = useTop("series");
  const popularSeries = usePopular("series");

  return (
    <>
      <SearchAreaMoviesSeries />
      <h2>Movies</h2>
      {trendingMovies ? (
        <PosterDisplayMovies
          arr={trendingMovies}
          sectionName="Popular"
          type="movie"
        />
      ) : (
        <p>Loading...</p>
      )}

      {topMovies ? (
        <PosterDisplayMovies
          arr={topMovies}
          sectionName="Top Rated"
          type="movie"
        />
      ) : (
        <p>Loading...</p>
      )}

      <h2>Series</h2>
      {popularSeries ? (
        <PosterDisplayMovies
          arr={popularSeries}
          sectionName="Popular"
          type="series"
        />
      ) : (
        <p>Loading...</p>
      )}

      {topSeries ? (
        <PosterDisplayMovies
          arr={topSeries}
          sectionName="Top Rated"
          type="series"
        />
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};
