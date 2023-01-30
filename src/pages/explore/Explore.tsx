import React, { useEffect, useState } from "react";
import { getPopularMovies, getTopRatedMovies } from "./features/api";
import { filterMovieInformation } from "features/filterMovieInformation";
import { PosterDisplay } from "reusableComponents/PosterDisplay";
import { getConfig } from "features/config/api";
import "../../css/explore.css";

import { GetConfig } from "features/config/types";

import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "react-query";

interface Props {}

export const Explore: React.FC<Props> = () => {
  const { data, isLoading } = useQuery("config", getConfig);

  const [popularMovies, setPopularMovies] = useState<any>();
  const [topRatedMovies, setTopRatedMovies] = useState<any>();

  //   console.log(popularMovies, topRatedMovies);

  useEffect(() => {
    const fetch = async () => {
      const { data: popMovies } = await getPopularMovies();
      const { data: topMovies } = await getTopRatedMovies();
      const popMovieData = filterMovieInformation(data?.data, popMovies);
      const topMovieData = filterMovieInformation(data?.data, topMovies);
      setPopularMovies(popMovieData);
      setTopRatedMovies(topMovieData);
    };

    if (!data?.data) return;

    fetch();
  }, [data?.data]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {popularMovies ? (
        <PosterDisplay
          arr={popularMovies}
          sectionName="Popular Movies"
        ></PosterDisplay>
      ) : null}

      {topRatedMovies ? (
        <PosterDisplay
          arr={topRatedMovies}
          sectionName="Top Rated Movies"
        ></PosterDisplay>
      ) : null}
      {/* <PopularWithFriends></PopularWithFriends> */}
    </>
  );
};
