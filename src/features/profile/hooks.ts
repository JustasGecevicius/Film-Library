import { UserInfo } from "features/context/types";
import { fetchLiked, fetchRated } from "features/likeAndRate/functions";
import { LikedRatedData } from "features/likeAndRate/types";
import { Firestore } from "firebase/firestore";
import { useState } from "react";
import { useQuery } from "react-query";
import _ from "lodash";


export const useUserInfo = (userInfo : UserInfo | undefined, db : Firestore) => {
  const [ averageMovieRating, setAverageMovieRating ] = useState<number>();
  const [ averageSeriesRating, setAverageSeriesRating ] = useState<number>();
  const [ numberOfLikedMovies, setNumberOfLikedMovies ] = useState<number>();
  const [ numberOfLikedSeries, setNumberOfLikedSeries ] = useState<number>();

  useQuery<LikedRatedData | undefined>(
    ["ratedMovieData", db, userInfo?.uid],
    () => {
      return fetchRated(db, userInfo?.uid, "movie");
    },
    {
      enabled: !!userInfo && !!db,
      onSuccess(data) {
        if(!data) return;
        setAverageMovieRating(_.round(_.mean(Object.values(data)), 2));
      },
    }
  );
  useQuery<LikedRatedData | undefined>(
    ["ratedSeriesData", db, userInfo?.uid],
    () => {
      return fetchRated(db, userInfo?.uid, "series");
    },
    {
      enabled: !!userInfo && !!db,
      onSuccess(data) {
        if(!data) return;
        setAverageSeriesRating(_.round(_.mean(Object.values(data)), 2));
      },
    }
  );
  useQuery<LikedRatedData | undefined>(
    ["likedMoviesData", db, userInfo?.uid],
    () => {
      return fetchLiked(db, userInfo?.uid, "movie");
    },
    {
      enabled: !!userInfo && !!db,
      onSuccess(data) {
        if(!data) return;
        setNumberOfLikedMovies(Object.keys(data).length);
      },
    }
  );
  useQuery<LikedRatedData | undefined>(
    ["likedSeriesData", db, userInfo?.uid],
    () => {
      return fetchLiked(db, userInfo?.uid, "series");
    },
    {
      enabled: !!userInfo && !!db,
      onSuccess(data) {
        if(!data) return;
        setNumberOfLikedSeries(Object.keys(data).length);
      },
    }
  );
  return {averageMovieRating, averageSeriesRating, numberOfLikedMovies, numberOfLikedSeries}
}