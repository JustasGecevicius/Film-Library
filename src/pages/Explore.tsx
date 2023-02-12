import { PosterDisplayMovies } from "features/displayPostersSection/components/PosterDisplayMovies";
import "../css/explore.css";
import { useTopMovies, useTrendingMovies } from "features/movies/hooks";
import { SearchAreaMovies } from "features/searchArea/components/SearchAreaMovies";

interface Props {}

export const Explore: React.FC<Props> = () => {

  const topMovies = useTopMovies();
  const trendingMovies = useTrendingMovies();
  console.log(topMovies, trendingMovies);


  return (
    <>
      <SearchAreaMovies />
      {trendingMovies ? (
        <PosterDisplayMovies
          arr={trendingMovies}
          sectionName="Popular Movies"
        ></PosterDisplayMovies>
      ) : null}

      {topMovies ? (
        <PosterDisplayMovies
          arr={topMovies}
          sectionName="Top Rated Movies"
        ></PosterDisplayMovies>
      ) : null}
    </>
  );
};
