import { PosterDisplayMovies } from "features/displayPostersSection/components/PosterDisplayMovies";
import "../css/explore.css";
import { SearchAreaMovies } from "features/searchArea/components/SearchAreaMovies";
import { useTop } from "features/topRated/hooks";
import { usePopular } from "features/popular/hooks";

interface Props {}

export const Explore: React.FC<Props> = () => {
  const topMovies = useTop("movie");
  const trendingMovies = usePopular("movie");
  const topSeries = useTop("series");
  const popularSeries = usePopular("series");

  return (
    <>
      <SearchAreaMovies />
      <h2>Movies</h2>
      {trendingMovies ? (
        <PosterDisplayMovies arr={trendingMovies} sectionName="Popular" type="movie"/>
      ) : (
        <p>Loading...</p>
      )}

      {topMovies ? (
        <PosterDisplayMovies arr={topMovies} sectionName="Top Rated" type="movie"/>
      ) : (
        <p>Loading...</p>
      )}

      <h2>Series</h2>
      {popularSeries ? (
        <PosterDisplayMovies arr={popularSeries} sectionName="Popular" type="series"/>
      ) : (
        <p>Loading...</p>
      )}

      {topSeries ? (
        <PosterDisplayMovies arr={topSeries} sectionName="Top Rated" type="series"/>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};
