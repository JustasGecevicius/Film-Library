import { useFirebaseContext } from "features/context/FirebaseContext";
import {
  checkRating,
  fetchLiked,
  fetchRated,
  likedRatedCheck,
} from "features/movies/functions";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";

export const useLiked = (likeButtonClicked: boolean) => {
  const [liked, setLiked] = useState<boolean>();
  const { userInfo, db } = useFirebaseContext();
  const { movieId } = useParams();
  const { data: likedMovies } = useQuery(
    ["likedMovies", userInfo, db],
    () => {
      return fetchLiked(db, userInfo?.uid);
    },
    {
      enabled: !!userInfo && !!db,
    }
  );
  useEffect(() => {
    if (!likedMovies || !movieId) return;
    setLiked(likedRatedCheck(Object.keys(likedMovies), movieId));
  }, [likedMovies, movieId]);

  useEffect (() => {
    setLiked(!liked);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[likeButtonClicked]);

  return liked;
};

export const useRating = (rateButtonClick : boolean | undefined, rateInput: string | undefined) => {
  const [rating, setRating] = useState<string>();
  const { userInfo, db } = useFirebaseContext();
  const { movieId } = useParams();
  const { data: ratedMovies } = useQuery(
    ["ratedMovies", db, userInfo?.uid],
    () => {
      return fetchRated(db, userInfo?.uid);
    },
    {
      enabled: !!userInfo && !!db,
    }
  );
  useEffect(() => {
    if (!ratedMovies || !movieId) return;
    setRating(checkRating(ratedMovies, movieId));
  }, [ratedMovies, movieId]);
  useEffect(() => {
    setRating(rateInput);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rateButtonClick]);
  return rating;
};
