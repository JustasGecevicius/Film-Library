import { getConfig } from "features/config/api";
import { useFirebaseContext } from "features/context/FirebaseContext";
import { checkLikeAndRate } from "features/movies/functions";
import { MovieObject } from "features/movies/types";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { getPopularSeries, getTopRatedSeries } from "./api";
import { fetchLikedSeries, fetchRatedSeries, filterSeriesInformation } from "./functions";

export const useTopSeries = () => {
  // State
  const [topSeries, setTopSeries] = useState <MovieObject[]>();
  // Context
  const { userInfo, db } = useFirebaseContext();
  // // Data Query
  const { data: config } = useQuery("config", getConfig);
  const { data: topRated } = useQuery("topRatedSeries", getTopRatedSeries);
  const { data: likedSeries } = useQuery(
    ["likedSeries", userInfo, db],
    () => fetchLikedSeries(db, userInfo?.uid),
    { enabled: !!userInfo && !!db }
  );
  const { data: ratedSeries } = useQuery(
    ["ratedSeries", userInfo, db],
    () => fetchRatedSeries(db, userInfo?.uid),
    { enabled: !!userInfo && !!db }
  );
    //console.log(likedSeries, ratedSeries, "labas");
  // Filtering information and Checking for Like and Rate
  useEffect(() => {
    if (!config || !topRated || !likedSeries || !ratedSeries) return;
  const topData = filterSeriesInformation(config, topRated);
    const likeAndRateCheckedTopData = checkLikeAndRate(
      topData,
      Object.keys(likedSeries),
      ratedSeries
    );
    setTopSeries(likeAndRateCheckedTopData);
  }, [config, topRated, likedSeries, ratedSeries]);
   return topSeries;
};

export const usePopularSeries = () => {
  // State
  const [popularSeries, setPopularSeries] = useState <MovieObject[]>();
  // Context
  const { userInfo, db } = useFirebaseContext();
  // // Data Query
  const { data: config } = useQuery("config", getConfig);
  const { data: popular } = useQuery("popularSeries", getPopularSeries);
  const { data: likedSeries } = useQuery(
    ["likedSeries", userInfo, db],
    () => fetchLikedSeries(db, userInfo?.uid),
    { enabled: !!userInfo && !!db }
  );
  const { data: ratedSeries } = useQuery(
    ["ratedSeries", userInfo, db],
    () => fetchRatedSeries(db, userInfo?.uid),
    { enabled: !!userInfo && !!db }
  );
    //console.log(likedSeries, ratedSeries, "labas");
  // Filtering information and Checking for Like and Rate
  useEffect(() => {
    if (!config || !popular || !likedSeries || !ratedSeries) return;
  const popularData = filterSeriesInformation(config, popular);
    const likeAndRateCheckedTopData = checkLikeAndRate(
      popularData,
      Object.keys(likedSeries),
      ratedSeries
    );
    setPopularSeries(likeAndRateCheckedTopData);
  }, [config, popular, likedSeries, ratedSeries]);
   return popularSeries;
};