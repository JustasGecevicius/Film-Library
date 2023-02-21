
import { getConfig } from "features/config/api";
import { useFirebaseContext } from "features/context/FirebaseContext";
import { getPersonCredits } from "features/credits/api";
import { checkLikeAndRate, fetchLiked, fetchRated } from "features/likeAndRate/functions";
import { filterMovieInformation } from "features/movies/functions";
import { MovieData, MovieObject } from "features/movies/types";
import { useEffect, useState } from "react"
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { filterCreditsCastInformation } from "./functions";

export const useCredits = (type : "movie" | "series") => {
  const [credits, setCredits] = useState<MovieObject[]>();
  const { userInfo, db } = useFirebaseContext();
  const { id } = useParams();
  const { data: config } = useQuery("config", getConfig, {
    staleTime: 1800000
  });
  const {data} = useQuery(["credits", id, type], () => {
    return getPersonCredits(id, type);
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
    if (!config || !data || !liked || !rated) return;
    const creditsData = filterCreditsCastInformation(config, data.cast)
    const likeAndRateCheckedData = checkLikeAndRate(
      creditsData,
      Object.keys(liked),
      rated
    );
    setCredits(likeAndRateCheckedData);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [config, data, liked, rated]);
  return credits;
}