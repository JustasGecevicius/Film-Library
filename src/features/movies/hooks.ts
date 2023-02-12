import { getConfig } from "features/config/api";
import { useFirebaseContext } from "features/context/FirebaseContext";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { getTopRatedMovies, getTrendingMovies } from "./api";
import {
  checkMoviesArrayLike,
  fetchLiked,
} from "./functions";
import { MovieData, MovieObject } from "./types";

export const useTrendingMovies = () => {
  const [trendingMovies, setTrendingMovies] = useState<MovieData[]>();
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
    console.log(config);
    if (!config || !trending || !likedMovies) return;
    const likeCheckedTrendingData = checkMoviesArrayLike(trending.results, Object.keys(likedMovies))
    setTrendingMovies(likeCheckedTrendingData);
  }, [config, trending, likedMovies]);
  return trendingMovies;
};

export const useTopMovies = () => {
  const [topMovies, setTopMovies] = useState<MovieData[]>();
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
    const likeCheckedTopData = checkMoviesArrayLike(top.results, Object.keys(likedMovies));
    setTopMovies(likeCheckedTopData);
  }, [config, top, likedMovies]);
  return topMovies;
};
