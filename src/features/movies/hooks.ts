import { getConfig } from "features/config/api";
import { useFirebaseContext } from "features/context/FirebaseContext";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { getTopRatedMovies, getTrendingMovies } from "./api";
import {
  checkMoviesArrayLike,
  fetchLiked,
  filterMovieInformation,
} from "./functions";
import { MovieObject } from "./types";

export const useTrendingMovies = () => {
  const [trendingMovies, setTrendingMovies] = useState<MovieObject[]>();
  const { data: config } = useQuery("config", getConfig);
  const { data: trending } = useQuery("trending", getTrendingMovies);
  const { userInfo, db } = useFirebaseContext();
  const { data: likedMovies } = useQuery(
    ["likedMovies", userInfo, db],
    () => fetchLiked(db, userInfo?.uid),
    {
      enabled: !!userInfo,
    }
  );
  useEffect(() => {
    if (!config || !trending || !likedMovies) return;
    const trendingData = filterMovieInformation(config, trending.results);
    const likeCheckedTrendingData = checkMoviesArrayLike(trendingData, Object.keys(likedMovies))
    setTrendingMovies(likeCheckedTrendingData);
  }, [config, trending, likedMovies]);
  return trendingMovies;
};

export const useTopMovies = () => {
  const [topMovies, setTopMovies] = useState<MovieObject[]>();
  const { data: config } = useQuery("config", getConfig);
  const { data: top } = useQuery("topRated", getTopRatedMovies);
  const { userInfo, db } = useFirebaseContext();
  const { data: likedMovies } = useQuery(
    ["likedMovies", userInfo, db],
    () => fetchLiked(db, userInfo?.uid),
    {
      enabled: !!userInfo,
    }
  );
  useEffect(() => {
    if (!config || !top || !likedMovies) return;
    const topData = filterMovieInformation(config, top.results);
    const likeCheckedTopData = checkMoviesArrayLike(topData, Object.keys(likedMovies));
    setTopMovies(likeCheckedTopData);
  }, [config, top, likedMovies]);
  return topMovies;
};
