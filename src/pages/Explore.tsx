import { PosterDisplayMovies } from "features/displayPostersSection/components/PosterDisplayMovies";
import "../css/explore.css";
import { useTopMovies, useTrendingMovies } from "features/movies/hooks";
import { SearchAreaMovies } from "features/searchArea/components/SearchAreaMovies";
import { usePopularSeries, useTopSeries } from "features/series/hooks";

interface Props {}

export const Explore: React.FC<Props> = () => {
  const topMovies = useTopMovies();
  const trendingMovies = useTrendingMovies();
  const topSeries = useTopSeries();
  const popularSeries = usePopularSeries();
  console.log(topSeries);
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
