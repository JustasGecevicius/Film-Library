// Hooks
import { useFirebaseContext } from '../context/FirebaseContext';
import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
// Functions
import { checkLikeAndRate } from '../likeAndRate/functions';
import { filterMovieInformation } from '../movies/functions';
import { filterSeriesInformation } from '../series/functions';
// Types
import { MovieData, MovieObject } from '../movies/types';
import { FetchedSeriesObjectResults } from '../series/types';
// API
import { getTopRated } from './api';
import { useLikedAndRated } from '../utils/firestore';
import { useConfig } from '../utils/moviedb';

// A hook that returns the Top Rated movies or series
export const useTop = (type: "movie" | "series", pageNumber: number = 1) => {
  // State
  const [top, setTop] = useState<MovieObject[]>();
  // Context
  const { userInfo, db } = useFirebaseContext();
  // Data Query
  const { config } = useConfig();
  const { data } = useQuery(
    ["topData", type, pageNumber],
    () => {
      return getTopRated(type, pageNumber);
    },
    {
      staleTime: 300000,
    }
  );
  
  const {liked, rated} = useLikedAndRated(db, type, userInfo?.uid)

  // Filtering information and Checking for Like and Rate
  useEffect(() => {
    if (!config || !data) return;
    const trendingData =
      type === "movie"
        ? filterMovieInformation(config, data as MovieData[])
        : filterSeriesInformation(config, data as FetchedSeriesObjectResults[]);
    if (!liked || !rated) {
      setTop(trendingData);
    } 
    else if (liked && rated) {
      const likeAndRateCheckedTrendingData = checkLikeAndRate(
        trendingData,
        Object.keys(liked),
        rated
      );
      setTop(likeAndRateCheckedTrendingData);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [config, data, liked, rated]);
  return top;
};
