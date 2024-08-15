import { LikedRatedData } from '../likeAndRate/types';
import { Firestore } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { mean, round } from 'lodash';
import { calculateRatings, fetchUserLiked, fetchUserRated } from './functions';
import { useFirebaseContext } from '../context/FirebaseContext';
import { fetchMoviesFromList, fetchSeriesFromList } from '../friends/functions';
import { MovieObject } from '../movies/types';
import {
  fetchFirestore,
  fetchFirestoreCount,
  getMovieOrSeriesCollectionName,
} from '../utils/firestore';
import { useConfig } from '../../hooks';

export const useUserInfo = (userId: string | undefined, db: Firestore) => {
  const [averageMovieRating, setAverageMovieRating] = useState(0);
  const [averageSeriesRating, setAverageSeriesRating] = useState(0);
  const [differentMoviesRatings, setDifferentMoviesRatings] =
    useState<{ x: number; y: number }[]>();
  const [differentSeriesRatings, setDifferentSeriesRatings] =
    useState<{ x: number; y: number }[]>();

  const { data: collectionMovieData } = useQuery<LikedRatedData | undefined>(
    ['ratedMovieData', db, userId],
    () =>
      fetchFirestore(
        db,
        getMovieOrSeriesCollectionName('movie', 'rated'),
        userId
      ),
    { enabled: !!userId && !!db }
  );

  useEffect(() => {
    if (!collectionMovieData) return;
    const average = round(mean(Object.values(collectionMovieData)), 1);
    setAverageMovieRating(average ? average : 0);
    setDifferentMoviesRatings(
      calculateRatings(Object.values(collectionMovieData))
    );
  }, [collectionMovieData]);

  const { data: collectionSeriesData } = useQuery<LikedRatedData | undefined>(
    ['ratedSeriesData', db, userId],
    () =>
      fetchFirestore(
        db,
        getMovieOrSeriesCollectionName('series', 'rated'),
        userId
      ),
    { enabled: !!userId && !!db }
  );

  useEffect(() => {
    if (!collectionSeriesData) return;
    const average = round(mean(Object.values(collectionSeriesData)), 1);
    setAverageSeriesRating(average ? average : 0);
    setDifferentSeriesRatings(
      calculateRatings(Object.values(collectionSeriesData))
    );
  }, [collectionSeriesData]);

  const { data: numberOfLikedMovies } = useQuery<number | undefined>(
    ['likedMoviesData', db, userId],
    () =>
      fetchFirestoreCount(
        db,
        getMovieOrSeriesCollectionName('movie', 'liked'),
        userId
      ),
    { enabled: !!userId && !!db }
  );

  const { data: numberOfLikedSeries } = useQuery<number | undefined>(
    ['likedSeriesData', db, userId],
    () =>
      fetchFirestoreCount(
        db,
        getMovieOrSeriesCollectionName('series', 'liked'),
        userId
      ),
    { enabled: !!userId && !!db }
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

export const useUserLiked = (type: 'movie' | 'series', id?: string) => {
  const [data, setData] = useState<MovieObject[]>();
  const { db } = useFirebaseContext();
  const { config } = useConfig();

  const { data: userLiked } = useQuery(
    ['userLiked', type, db],
    () => fetchUserLiked(id, db, type),
    { enabled: !!id && !!db && !!type }
  );

  const { data: userLikedData } = useQuery(
    ['filteredLiked', userLiked, config, type],
    () => {
      if (!userLiked) return;
      return type === 'movie'
        ? fetchMoviesFromList(Object.keys(userLiked), config)
        : fetchSeriesFromList(Object.keys(userLiked), config);
    },
    { enabled: !!userLiked && !!config }
  );

  useEffect(() => {
    if (!userLikedData) return;

    setData(userLikedData?.map((elem) => ({ ...elem, liked: true })));
  }, [userLikedData]);

  return data;
};

export const useUserRated = (type: 'movie' | 'series', userId?: string) => {
  const [data, setData] = useState<MovieObject[]>();
  const { db } = useFirebaseContext();
  const { config } = useConfig();

  const { data: userRated } = useQuery(
    ['userRated', type, db],
    () => fetchUserRated(userId, db, type),
    { enabled: !!userId && !!db && !!type }
  );

  const { data: rated } = useQuery(
    ['rated', type],
    () =>
      fetchFirestore(db, getMovieOrSeriesCollectionName(type, 'rated'), userId),
    { enabled: !!userId && !!db }
  );

  const { data: userRatedData } = useQuery(
    ['filteredRated', userRated, config, type],
    () => {
      if (!userRated) return;
      return type === 'movie'
        ? fetchMoviesFromList(Object.keys(userRated), config)
        : fetchSeriesFromList(Object.keys(userRated), config);
    },
    { enabled: !!userRated && !!config && !!rated }
  );

  useEffect(() => {
    if (!rated) return;
    setData(
      userRatedData?.map((elem) => ({ ...elem, rating: rated[elem.id] })) ||
        undefined
    );
  }, [rated, userRatedData]);

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
