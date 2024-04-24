import { useFirebaseContext } from '../context/FirebaseContext';
import { checkLikeAndRate } from '../likeAndRate/functions';
import { filterMovieInformation } from '../movies/functions';
import { MovieData, MovieObject } from '../movies/types';
import { filterSeriesInformation } from '../series/functions';
import { FetchedSeriesObjectResults } from '../series/types';
import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { getPopular } from './api';
import { useLikedAndRated } from '../utils/firestore';
import { useConfig } from '../utils/moviedb';

export const usePopular = (type: 'movie' | 'series', pageNumber: number = 1) => {
  // State
  const [popular, setPopular] = useState<MovieObject[]>();
  // Context
  const { userInfo, db } = useFirebaseContext();
  // Data Query
  const { config } = useConfig();

  const { data } = useQuery(
    ['popularData', type, pageNumber],
    () => {
      return getPopular(type, pageNumber);
    },
    {
      staleTime: 300000,
    }
  );

  const { liked, rated } = useLikedAndRated(db, type, userInfo?.uid);

  // Filtering information and Checking for Like and Rate
  useEffect(() => {
    if (!config || !data) return;
    const trendingData =
      type === 'movie'
        ? filterMovieInformation(config, data as MovieData[])
        : filterSeriesInformation(config, data as FetchedSeriesObjectResults[]);
    if (!liked || !rated) {
      setPopular(trendingData);
    } else if (liked && rated) {
      const likeAndRateCheckedTrendingData = checkLikeAndRate(
        trendingData,
        Object.keys(liked),
        rated
      );
      setPopular(likeAndRateCheckedTrendingData);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [config, data, liked, rated]);
  return popular;
};
