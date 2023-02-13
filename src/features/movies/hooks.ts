import { getConfig } from "features/config/api";
import { useFirebaseContext } from "features/context/FirebaseContext";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { getTopRatedMovies, getTrendingMovies } from "./api";
import {
  checkLikeAndRate,
  fetchLiked,
  fetchRated,
  filterMovieInformation,
} from "./functions";
import { MovieObject } from "./types";

export const useTrendingMovies = () => {
  // State
  const [trendingMovies, setTrendingMovies] = useState<MovieObject[]>();
  // Context
  const { userInfo, db } = useFirebaseContext();
  // Data Query
  const { data: config } = useQuery("config", getConfig);
  const { data: trending } = useQuery("trending", getTrendingMovies);
  const { data: likedMovies } = useQuery(
    ["likedMovies", userInfo, db],
    () => fetchLiked(db, userInfo?.uid),
    { enabled: !!userInfo && !!db }
  );
  const { data: ratedMovies } = useQuery(
    ["ratedMovies", userInfo, db],
    () => fetchRated(db, userInfo?.uid),
    { enabled: !!userInfo && !!db }
  );

    // Filtering information and Checking for Like and Rate
  useEffect(() => {
    if (!config || !trending || !likedMovies || !ratedMovies) return;
    const trendingData = filterMovieInformation(config, trending.results);
    const likeAndRateCheckedTrendingData = checkLikeAndRate(
      trendingData,
      Object.keys(likedMovies),
      ratedMovies
    );
    setTrendingMovies(likeAndRateCheckedTrendingData);
  }, [config, trending, likedMovies, ratedMovies]);
  return trendingMovies;
};

export const useTopMovies = () => {
  // State
  const [topMovies, setTopMovies] = useState<MovieObject[]>();
  // Context
  const { userInfo, db } = useFirebaseContext();
  // Data Query
  const { data: config } = useQuery("config", getConfig);
  const { data: topRate } = useQuery("topRated", getTopRatedMovies);
  const { data: likedMovies } = useQuery(
    ["likedMovies", userInfo, db],
    () => fetchLiked(db, userInfo?.uid),
    { enabled: !!userInfo && !!db }
  );
  const { data: ratedMovies } = useQuery(
    ["ratedMovies", userInfo, db],
    () => fetchRated(db, userInfo?.uid),
    { enabled: !!userInfo && !!db }
  );

  // Filtering information and Checking for Like and Rate
  useEffect(() => {
    if (!config || !topRate || !likedMovies || !ratedMovies) return;
    const topData = filterMovieInformation(config, topRate.results);
    const likeAndRateCheckedTopData = checkLikeAndRate(
      topData,
      Object.keys(likedMovies),
      ratedMovies
    );
    setTopMovies(likeAndRateCheckedTopData);
  }, [config, topRate, likedMovies, ratedMovies]);
  return topMovies;
};
