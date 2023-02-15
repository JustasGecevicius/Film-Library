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
  const [liked, setLiked] = useState<boolean | undefined>(undefined);
  const { userInfo, db } = useFirebaseContext();
  const { id } = useParams();
  const { data: likedData } = useQuery<LikedRatedData | undefined>(
    ["likedData", userInfo, db],
    () => fetchLiked(db, userInfo?.uid, type),
    { enabled: !!userInfo && !!db }
  );
  useEffect(() => {
    if (!likedData || !id) return;
    setLiked(checkLike(Object.keys(likedData), id));
  }, [likedData, id]);

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
  const [rating, setRating] = useState<string>();
  const { userInfo, db } = useFirebaseContext();
  const { id } = useParams();
  const { data: ratedData } = useQuery<LikedRatedData | undefined>(
    ["ratedData", db, userInfo?.uid],
    () => {
      return fetchRated(db, userInfo?.uid, type)
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
