import { useFirebaseContext } from "features/context/FirebaseContext";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { checkLike, checkRating, fetchLiked, fetchRated } from "./functions";
import { LikedRatedData } from "./types";

export const useLiked = (
  likeButtonClicked: boolean,
  type: "movie" | "series"
) => {
  // Getting Context and id from the Router
  const { userInfo, db } = useFirebaseContext();
  const { id } = useParams();
  // Liked state for this specific movie/series
  const [liked, setLiked] = useState<boolean | undefined>(undefined);
  // Gets the liked movies/series for this user
  const { data: likedData } = useQuery<LikedRatedData | undefined>(
    ["likedData", userInfo, db],
    () => fetchLiked(db, userInfo?.uid, type),
    { enabled: !!userInfo && !!db }
  );
  // Setting liked to false or true based on if this series/movies was found in the list for this specific user
  useEffect(() => {
    if (!likedData || !id) return;
    setLiked(checkLike(Object.keys(likedData), id));
  }, [likedData, id]);
  // Setting liked based on the like button click
  useEffect(() => {
    if (liked === undefined) return;
    setLiked(!liked);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [likeButtonClicked]);

  return liked;
};

export const useRating = (
  rateButtonClick: boolean | undefined,
  rateInput: string | undefined,
  type: "movie" | "series"
) => {
  const { userInfo, db } = useFirebaseContext();
  const { id } = useParams();

  const [rating, setRating] = useState<string>();

  const { data: ratedData } = useQuery<LikedRatedData | undefined>(
    ["ratedData", db, userInfo?.uid],
    () => {
      return fetchRated(db, userInfo?.uid, type);
    },
    {
      enabled: !!userInfo && !!db,
    }
  );
  useEffect(() => {
    if (!ratedData || !id) return;
    setRating(checkRating(ratedData, id));
  }, [ratedData, id]);
  useEffect(() => {
    if (!rateInput) return;
    setRating(rateInput);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rateButtonClick]);
  return rating;
};
