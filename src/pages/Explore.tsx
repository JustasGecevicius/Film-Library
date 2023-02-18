// Components
import { PosterDisplayMoviesSeries } from "features/displayPostersSection/components/PosterDisplayMoviesSeries";
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

  return (<>
    <SearchAreaMoviesSeries />
    <div className="explore">      
      <h2 className="typeName">Movies</h2>
      {trendingMovies ? (
        <PosterDisplayMoviesSeries
          arr={trendingMovies}
          sectionName="Popular"
          type="movie"
        />
      ) : (
        <p>Loading...</p>
      )}

      {topMovies ? (
        <PosterDisplayMoviesSeries
          arr={topMovies}
          sectionName="Top Rated"
          type="movie"
        />
      ) : (
        <p>Loading...</p>
      )}

      <h2 className="typeName">Series</h2>
      {popularSeries ? (
        <PosterDisplayMoviesSeries
          arr={popularSeries}
          sectionName="Popular"
          type="series"
        />
      ) : (
        <p>Loading...</p>
      )}

      {topSeries ? (
        <PosterDisplayMoviesSeries
          arr={topSeries}
          sectionName="Top Rated"
          type="series"
        />
      ) : (
        <p>Loading...</p>
      )}
    </div>
    </>
  );
};
