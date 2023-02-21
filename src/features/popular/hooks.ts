import { getConfig } from "features/config/api";
import { useFirebaseContext } from "features/context/FirebaseContext";
import { checkLikeAndRate, fetchLiked, fetchRated } from "features/likeAndRate/functions";
import { filterMovieInformation } from "features/movies/functions";
import { MovieData, MovieObject } from "features/movies/types";
import { filterSeriesInformation } from "features/series/functions";
import { FetchedSeriesObjectResults } from "features/series/types";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { getPopular } from "./api";

export const usePopular = (type: "movie" | "series", pageNumber : number = 1) => {
  // State
  const [popular, setPopular] = useState<MovieObject[]>();
  // Context
  const { userInfo, db } = useFirebaseContext();
  // Data Query
  const { data: config } = useQuery("config", getConfig, {
    staleTime: 1800000
  });
  const { data } = useQuery(["popularData", type, pageNumber], () => {
    return getPopular(type, pageNumber);
  });
  const { data: liked } = useQuery(
    ["liked", userInfo, db, type],
    () => fetchLiked(db, userInfo?.uid, type),
    { enabled: !!userInfo && !!db }
  );
  const { data: rated } = useQuery(
    ["rated", userInfo, db, type],
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
    setPopular(likeAndRateCheckedTrendingData);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [config, data, liked, rated]);
  return popular;
};