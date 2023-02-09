import { PosterDisplayMovies } from "features/displayPostersSection/components/PosterDisplayMovies";
import "../css/explore.css";
import { SearchArea } from "features/searchArea/components/SearchArea";
import { useTopMovies, useTrendingMovies } from "features/movies/hooks";

interface Props {}

export const Explore: React.FC<Props> = () => {

  const topMovies = useTopMovies();
  const trendingMovies = useTrendingMovies();

  return (
    <>
      <SearchArea />
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
