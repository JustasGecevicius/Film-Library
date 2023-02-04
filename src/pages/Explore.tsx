// Hooks
import { useEffect, useState } from "react";
import { useQuery } from "react-query";

// Components
import { PosterDisplay } from "reusableComponents/PosterDisplay";
import { SearchArea } from "reusableComponents/SearchArea";
import { DisplayMovies } from "features/movies/components/DisplayMovies";

// Apis
import { getConfig } from "features/config/api";
import { getTopRatedMovies, getTrendingMovies } from "features/movies/api";

// Types
import { MovieObjectType } from "features/movies/types";

// Functions
import { filterMovieInformation } from "features/movies/functions";

// Styles
import "../css/explore.css";

export const Explore = () => {
  // States for both trending and top movies
  const [trendingMovies, setTrendingMovies] = useState<MovieObjectType[]>();
  const [topMovies, setTopMovies] = useState<MovieObjectType[]>();

  // Fetching config trending movies and top rated movies
  const { data: config } = useQuery("config", getConfig);
  const { data: trending } = useQuery("trending", getTrendingMovies);
  const { data: top } = useQuery("trending", getTopRatedMovies);

  // UseEffect for setting the movie data to state
  useEffect(() => {
    if (config && trending) {
      const trendingData = filterMovieInformation(config, trending);
      setTrendingMovies(trendingData);
    }
    if (config && top) {
      const topData = filterMovieInformation(config, top);
      setTopMovies(topData);
    }
  }, [trending, config, top]);

  return (
    <>
      <SearchArea />

      {trendingMovies && (
        <DisplayMovies
          movieArray={trendingMovies}
          sectionName="Popular Movies"
        />
      )}

      {topMovies && (
        <DisplayMovies movieArray={topMovies} sectionName="Top Rated Movies" />
      )}
    </>
  );
};
