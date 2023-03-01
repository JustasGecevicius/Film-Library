import { UserInfo } from "features/context/types";
import { fetchLiked, fetchRated } from "features/likeAndRate/functions";
import { LikedRatedData } from "features/likeAndRate/types";
import { Firestore } from "firebase/firestore";
import { useState } from "react";
import { useQuery } from "react-query";
import _ from "lodash";
import { calculateRatings, fetchUserLiked, fetchUserRated } from "./functions";
import { useFirebaseContext } from "features/context/FirebaseContext";
import { getConfig } from "features/config/api";
import {
  fetchMoviesFromList,
  fetchSeriesFromList,
} from "features/friends/functions";
import { MovieObject } from "features/movies/types";

export const useUserInfo = (userInfo: UserInfo | undefined, db: Firestore) => {
  const [averageMovieRating, setAverageMovieRating] = useState<number>();
  const [averageSeriesRating, setAverageSeriesRating] = useState<number>();
  const [numberOfLikedMovies, setNumberOfLikedMovies] = useState<number>();
  const [numberOfLikedSeries, setNumberOfLikedSeries] = useState<number>();
  const [differentMoviesRatings, setDifferentMoviesRatings] =
    useState<number[]>();
  const [differentSeriesRatings, setDifferentSeriesRatings] =
    useState<number[]>();
  useQuery<LikedRatedData | undefined>(
    ["ratedMovieData", db, userInfo?.uid],
    () => {
      return fetchRated(db, userInfo?.uid, "movie");
    },
    {
      enabled: !!userInfo && !!db,
      onSuccess(data) {
        if (!data) return;
        const average = _.round(_.mean(Object.values(data)), 1);
        setAverageMovieRating(average ? average : 0);
        setDifferentMoviesRatings(calculateRatings(Object.values(data)));
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
        if (!data) return;
        const average = _.round(_.mean(Object.values(data)), 1);
        setAverageSeriesRating(average ? average : 0);
        setDifferentSeriesRatings(calculateRatings(Object.values(data)));
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
        if (!data) return;
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
        if (!data) return;
        setNumberOfLikedSeries(Object.keys(data).length);
      },
    }
  );
  return {
    averageMovieRating,
    averageSeriesRating,
    numberOfLikedMovies,
    numberOfLikedSeries,
    differentMoviesRatings,
    differentSeriesRatings,
  };
};

export const useUserLiked = (type: "movie" | "series") => {
  const [data, setData] = useState<MovieObject[]>();
  const { userInfo, db } = useFirebaseContext();
  const { data: config } = useQuery("config", getConfig, {
    staleTime: 300000,
  });

  const { data: userLiked } = useQuery(
    ["userLiked", type, db],
    () => {
      return fetchUserLiked(userInfo?.uid, db, type);
    },
    {
      enabled: !!userInfo && !!db && !!type,
    }
  );

  useQuery(
    ["filteredLiked", userLiked, config, type],
    () => {
      if (!userLiked) return;
      return type === "movie"
        ? fetchMoviesFromList(Object.keys(userLiked), config)
        : fetchSeriesFromList(Object.keys(userLiked), config);
    },
    {
      enabled: !!userLiked && !!config,
      onSuccess: (data) => {
        setData(
          data?.map((elem) => {
            return { ...elem, liked: true };
          })
        );
      },
    }
  );

  return data;
};

export const useUserRated = (type: "movie" | "series") => {
  const [data, setData] = useState<MovieObject[]>();
  const { userInfo, db } = useFirebaseContext();
  const { data: config } = useQuery("config", getConfig, {
    staleTime: 300000,
  });
  const { data: userRated } = useQuery(
    ["userRated", type, db],
    () => {
      return fetchUserRated(userInfo?.uid, db, type);
    },
    {
      enabled: !!userInfo && !!db && !!type,
    }
  );
  const { data: rated } = useQuery(
    ["rated", type],
    () => fetchRated(db, userInfo?.uid, type),
    { enabled: !!userInfo && !!db }
  );


  useQuery(
    ["filteredRated", userRated, config, type],
    () => {
      if (!userRated) return;
      return type === "movie"
        ? fetchMoviesFromList(Object.keys(userRated), config)
        : fetchSeriesFromList(Object.keys(userRated), config);
    },
    {
      enabled: !!userRated && !!config && !!rated,
      onSuccess: (data) => {
        if(!rated) return
        setData(
          data?.map((elem) => {
            return { ...elem, rating: rated[elem.id] };
          })
        );
      },
    }
  );

  return data;
};
