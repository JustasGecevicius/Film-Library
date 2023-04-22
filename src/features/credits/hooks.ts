
import { getConfig } from "features/config/api";
import { useFirebaseContext } from "features/context/FirebaseContext";
import { getCreditsOfMovieSeries } from "features/credits/api";
import { checkLikeAndRate, fetchLiked, fetchRated } from "features/likeAndRate/functions";
import {  MovieObject } from "features/movies/types";
import { useEffect, useState } from "react"
import { useQuery } from "react-query";
import { filterPersonCreditsCastInformation } from "./functions";

export const useMovieSeriesCredits = (type : "movie" | "series", id : number | string | undefined, page = 1) => {
  const [credits, setCredits] = useState<MovieObject[]>();
  const { userInfo, db } = useFirebaseContext();
  const { data: config } = useQuery("config", getConfig, {
    staleTime: 300000
  });
  const {data} = useQuery(["credits", id, type], () => {
    return getCreditsOfMovieSeries(id, type);
  }, {
    enabled:!!id && !!type
  })
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
    if (!config || !data) return;
    const creditsData = filterPersonCreditsCastInformation(config, data.cast.slice(0, 19 * page));
    if(!liked || !rated){ setCredits(creditsData); return }
    
    const likeAndRateCheckedData = checkLikeAndRate(
      creditsData,
      Object.keys(liked),
      rated
    );
    setCredits(likeAndRateCheckedData);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [config, data, liked, rated, page]);
  return credits;
}