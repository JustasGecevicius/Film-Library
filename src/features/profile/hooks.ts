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

export const useUserInfo = (id: string | undefined, db: Firestore) => {
  const [averageMovieRating, setAverageMovieRating] = useState<number>();
  const [averageSeriesRating, setAverageSeriesRating] = useState<number>();
  const [numberOfLikedMovies, setNumberOfLikedMovies] = useState<number>();
  const [numberOfLikedSeries, setNumberOfLikedSeries] = useState<number>();
  const [differentMoviesRatings, setDifferentMoviesRatings] =
    useState<{ x: number; y: number; }[]>();
  const [differentSeriesRatings, setDifferentSeriesRatings] =
    useState<{ x: number; y: number; }[]>();
  useQuery<LikedRatedData | undefined>(
    ["ratedMovieData", db, id],
    () => {
      return fetchRated(db, id, "movie");
    },
    {
      enabled: !!id && !!db,
      onSuccess(data) {
        if (!data) return;
        const average = _.round(_.mean(Object.values(data)), 1);
        setAverageMovieRating(average ? average : 0);
        setDifferentMoviesRatings(calculateRatings(Object.values(data)));
      },
    }
  );
  useQuery<LikedRatedData | undefined>(
    ["ratedSeriesData", db, id],
    () => {
      return fetchRated(db, id, "series");
    },
    {
      enabled: !!id && !!db,
      onSuccess(data) {
        if (!data) return;
        const average = _.round(_.mean(Object.values(data)), 1);
        setAverageSeriesRating(average ? average : 0);
        setDifferentSeriesRatings(calculateRatings(Object.values(data)));
      },
    }
  );
  useQuery<LikedRatedData | undefined>(
    ["likedMoviesData", db, id],
    () => {
      return fetchLiked(db, id, "movie");
    },
    {
      enabled: !!id && !!db,
      onSuccess(data) {
        if (!data) return;
        setNumberOfLikedMovies(Object.keys(data).length);
      },
    }
  );
  useQuery<LikedRatedData | undefined>(
    ["likedSeriesData", db, id],
    () => {
      return fetchLiked(db, id, "series");
    },
    {
      enabled: !!id && !!db,
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

export const useUserLiked = (type: "movie" | "series", id: string | undefined) => {
  const [data, setData] = useState<MovieObject[]>();
  const { db } = useFirebaseContext();
  const { data: config } = useQuery("config", getConfig, {
    staleTime: 300000,
  });

  const { data: userLiked } = useQuery(
    ["userLiked", type, db],
    () => {
      return fetchUserLiked(id, db, type);
    },
    {
      enabled: !!id && !!db && !!type,
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

export const useUserRated = (type: "movie" | "series", id: string | undefined) => {
  const [data, setData] = useState<MovieObject[]>();
  const { db } = useFirebaseContext();
  const { data: config } = useQuery("config", getConfig, {
    staleTime: 300000,
  });
  const { data: userRated } = useQuery(
    ["userRated", type, db],
    () => {
      return fetchUserRated(id, db, type);
    },
    {
      enabled: !!id && !!db && !!type,
    }
  );
  const { data: rated } = useQuery(
    ["rated", type],
    () => fetchRated(db, id, type),
    { enabled: !!id && !!db }
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

// export const useChartUserRatedData = () => {
//   const {db, id} = useFirebaseContext();
//   const { data: userRatedMovies } = useQuery(
//     ["userRated", "movie", db],
//     () => {
//       return fetchUserRated(id, db, "movie");
//     },
//     {
//       enabled: !!id && !!db,
//     }
//   );
//   const { data: userRatedSeries } = useQuery(
//     ["userRated", "series", db],
//     () => {
//       return fetchUserRated(id, db, "series");
//     },
//     {
//       enabled: !!id && !!db,
//     }
//   );
//  // console.log(userRatedMovies, userRatedSeries);
// }