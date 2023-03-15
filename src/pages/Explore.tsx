// Components
import { PosterDisplayMoviesSeries } from "features/displayPostersSection/components/PosterDisplayMoviesSeries";
import { SearchAreaMoviesSeries } from "features/searchArea/components/searchMoviesSeries/SearchAreaMoviesSeries";
// Styles
import "pages/css/explore.css";
import "css/app.css";
// Hooks
import { useTop } from "features/topRated/hooks";
import { usePopular } from "features/popular/hooks";
import { BounceLoader } from "react-spinners";
import { useSearchAreaImages } from "features/searchArea/hooks";
import { useFirebaseContext } from "features/context/FirebaseContext";

export const Explore = () => {
  // Getting all the movie information to display
  const {darkTheme} = useFirebaseContext();
  const topMovies = useTop("movie");
  const trendingMovies = usePopular("movie");
  const topSeries = useTop("series");
  const popularSeries = usePopular("series");
  const links = useSearchAreaImages();

  return (
    <>
      {topMovies && trendingMovies && topSeries && popularSeries && links ? (
        <div className={darkTheme? "darkTheme" : "theme"}>
          <SearchAreaMoviesSeries links={links}/>
          <div className="posterDisplaysWrapper">
            <h2 className="typeName">Movies</h2>

            <PosterDisplayMoviesSeries
              arr={trendingMovies}
              sectionName="Popular"
              type="movie"
              link="all/movie/Popular"
            />

            <PosterDisplayMoviesSeries
              arr={topMovies}
              sectionName="Top Rated"
              type="movie"
              link="all/movie/Top Rated"
            />

            <h2 className="typeName">Series</h2>

            <PosterDisplayMoviesSeries
              arr={popularSeries}
              sectionName="Popular"
              type="series"
              link="all/series/Popular"
            />

            <PosterDisplayMoviesSeries
              arr={topSeries}
              sectionName="Top Rated"
              type="series"
              link="all/series/Top Rated"
            />
          </div>
        </div>
      ) : <div className="spinner">
        <BounceLoader color="rgba(0, 0, 0, 1)"/>
      </div>}
    </>
  );
};
