import { LikedRatedData } from '../likeAndRate/types';
import { Firestore } from 'firebase/firestore';
import { useState } from 'react';
import { useQuery } from 'react-query';
import _ from 'lodash';
import { calculateRatings, fetchUserLiked, fetchUserRated } from './functions';
import { useFirebaseContext } from '../context/FirebaseContext';
import { fetchMoviesFromList, fetchSeriesFromList } from '../friends/functions';
import { MovieObject } from '../movies/types';
import {
  fetchFirestore,
  fetchFirestoreCount,
  getMovieOrSeriesCollectionName,
} from '../utils/firestore';
import { useConfig } from '../utils/moviedb';

export const useUserInfo = (userId: string | undefined, db: Firestore) => {
  const [averageMovieRating, setAverageMovieRating] = useState<number>();
  const [averageSeriesRating, setAverageSeriesRating] = useState<number>();
  const [numberOfLikedMovies, setNumberOfLikedMovies] = useState<number>();
  const [numberOfLikedSeries, setNumberOfLikedSeries] = useState<number>();
  const [differentMoviesRatings, setDifferentMoviesRatings] =
    useState<{ x: number; y: number }[]>();
  const [differentSeriesRatings, setDifferentSeriesRatings] =
    useState<{ x: number; y: number }[]>();
  useQuery<LikedRatedData | undefined>(
    ['ratedMovieData', db, userId],
    () => {
      return fetchFirestore(db, getMovieOrSeriesCollectionName('movie', 'rated'), userId);
    },
    {
      enabled: !!userId && !!db,
      onSuccess(data) {
        if (!data) return;
        const average = _.round(_.mean(Object.values(data)), 1);
        setAverageMovieRating(average ? average : 0);
        setDifferentMoviesRatings(calculateRatings(Object.values(data)));
      },
    }
  );
  useQuery<LikedRatedData | undefined>(
    ['ratedSeriesData', db, userId],
    () => {
      return fetchFirestore(
        db,
        getMovieOrSeriesCollectionName('series', 'rated'),
        userId
      );
    },
    {
      enabled: !!userId && !!db,
      onSuccess(data) {
        if (!data) return;
        const average = _.round(_.mean(Object.values(data)), 1);
        setAverageSeriesRating(average ? average : 0);
        setDifferentSeriesRatings(calculateRatings(Object.values(data)));
      },
    }
  );
  useQuery<number | undefined>(
    ['likedMoviesData', db, userId],
    () => {
      return fetchFirestoreCount(
        db,
        getMovieOrSeriesCollectionName('movie', 'liked'),
        userId
      );
    },
    {
      enabled: !!userId && !!db,
      onSuccess(data) {
        if (!data) return;
        setNumberOfLikedMovies(data);
      },
    }
  );
  useQuery<number | undefined>(
    ['likedSeriesData', db, userId],
    () => {
      return fetchFirestoreCount(
        db,
        getMovieOrSeriesCollectionName('series', 'liked'),
        userId
      );
    },
    {
      enabled: !!userId && !!db,
      onSuccess(data) {
        if (!data) return;
        setNumberOfLikedSeries(data);
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

export const useUserLiked = (type: 'movie' | 'series', id: string | undefined) => {
  const [data, setData] = useState<MovieObject[]>();
  const { db } = useFirebaseContext();
  const { config } = useConfig();

  const { data: userLiked } = useQuery(
    ['userLiked', type, db],
    () => {
      return fetchUserLiked(id, db, type);
    },
    {
      enabled: !!id && !!db && !!type,
    }
  );

  useQuery(
    ['filteredLiked', userLiked, config, type],
    () => {
      if (!userLiked) return;
      return type === 'movie'
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

export const useUserRated = (type: 'movie' | 'series', userId: string | undefined) => {
  const [data, setData] = useState<MovieObject[]>();
  const { db } = useFirebaseContext();
  const { config } = useConfig();
  const { data: userRated } = useQuery(
    ['userRated', type, db],
    () => {
      return fetchUserRated(userId, db, type);
    },
    {
      enabled: !!userId && !!db && !!type,
    }
  );
  const { data: rated } = useQuery(
    ['rated', type],
    () => fetchFirestore(db, getMovieOrSeriesCollectionName(type, 'rated'), userId),
    { enabled: !!userId && !!db }
  );

  useQuery(
    ['filteredRated', userRated, config, type],
    () => {
      if (!userRated) return;
      return type === 'movie'
        ? fetchMoviesFromList(Object.keys(userRated), config)
        : fetchSeriesFromList(Object.keys(userRated), config);
    },
    {
      enabled: !!userRated && !!config && !!rated,
      onSuccess: (data) => {
        if (!rated) return;
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
