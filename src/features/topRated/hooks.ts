// API
import { getConfig } from "features/config/api";
// Hooks
import { useFirebaseContext } from "features/context/FirebaseContext";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
// Functions
import { checkLikeAndRate, fetchLiked, fetchRated } from "features/likeAndRate/functions";
import { filterMovieInformation } from "features/movies/functions";
import { filterSeriesInformation } from "features/series/functions";
// Types
import { MovieData, MovieObject } from "features/movies/types";
import { FetchedSeriesObjectResults } from "features/series/types";
// API
import { getTopRated } from "./api";

// A hook that returns the Top Rated movies or series
export const useTop = (type: "movie" | "series", pageNumber : number = 1) => {
  // State
  const [top, setTop] = useState<MovieObject[]>();
  // Context
  const { userInfo, db } = useFirebaseContext();
  // Data Query
  const { data: config } = useQuery("config", getConfig, {
    staleTime: Infinity
  });
  const { data } = useQuery(["topData", type, pageNumber], () => {
    return getTopRated(type, pageNumber);
  }, {
    staleTime: Infinity
  });
  const { data: liked } = useQuery(
    ["liked", type],
    () => fetchLiked(db, userInfo?.uid, type),
    { enabled: !!userInfo && !!db }
  );
  const { data: rated } = useQuery(
    ["rated", type],
    () => fetchRated(db, userInfo?.uid, type),
    { enabled: !!userInfo && !!db }
  );

  // Filtering information and Checking for Like and Rate
  useEffect(() => {
    if (!config || !data || !liked || !rated) return;
    const trendingData =
      type === "movie"
        ? filterMovieInformation(config, data as MovieData[])
        : filterSeriesInformation(config, data as FetchedSeriesObjectResults[]);
    const likeAndRateCheckedTrendingData = checkLikeAndRate(
      trendingData,
      Object.keys(liked),
      rated
    );
    setTop(likeAndRateCheckedTrendingData);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [config, data, liked, rated]);
  return top;
};