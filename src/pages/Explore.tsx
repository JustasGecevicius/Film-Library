import React, { useEffect, useState } from "react";
import { PosterDisplayMovies } from "features/displayPostersSection/components/PosterDisplayMovies";
import { getConfig } from "features/config/api";
import "../css/explore.css";
import { filterMovieInformation } from "features/movies/functions";
import { getTopRatedMovies, getTrendingMovies } from "features/movies/api";
import { SearchArea } from "features/searchArea/components/SearchArea";
import { useQuery } from "react-query";
import { MovieData, MovieObject } from "features/movies/types";

interface Props {}

export const Explore: React.FC<Props> = () => {
  // States for both trending and top movies
  const [trendingMovies, setTrendingMovies] = useState<MovieObject[]>();
  const [topMovies, setTopMovies] = useState<MovieObject[]>();

  // Fetching config trending movies and top rated movies
  const { data: config } = useQuery("config", getConfig);
  const { data: trending } = useQuery("trending", getTrendingMovies);
  const { data: top } = useQuery("trending", getTopRatedMovies);

  // UseEffect for setting the movie data to state
  useEffect(() => {
    if (config && trending) {
      const trendingData = filterMovieInformation(config, trending.results);
      setTrendingMovies(trendingData);
    }
    if (config && top) {
      const topData = filterMovieInformation(config, top.results);
      setTopMovies(topData);
    }
  }, [trending, config, top]);

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
