import { useFirebaseContext } from '../context/FirebaseContext';
import { checkLikeAndRate } from '../likeAndRate/functions';
import { filterMovieInformation } from '../movies/functions';
import { MovieData, MovieObject } from '../movies/types';
import { filterSeriesInformation } from '../series/functions';
import { FetchedSeriesObjectResults } from '../series/types';
import { useEffect, useState } from 'react';
import { useInfiniteQuery } from 'react-query';
import { getPopular } from './api';
import { useLikedAndRated } from '../utils/firestore';
import { useConfig } from '../../hooks';

export const usePopular = (type: 'movie' | 'series') => {
  // State
  const [popular, setPopular] = useState<MovieObject[]>();
  // Context
  const { userInfo, db } = useFirebaseContext();
  // Data Query
  const { config } = useConfig();

  const { data: { pages: responses } = {}, fetchNextPage } = useInfiniteQuery(
    ['popularData', type],
    ({ pageParam }) => getPopular(type, pageParam, true),
    {
      getNextPageParam: (lastResponse) =>
        !Array.isArray(lastResponse) &&
        lastResponse.total_pages > lastResponse.page
          ? lastResponse.page + 1
          : undefined,
    }
  );

  const { liked, rated } = useLikedAndRated(db, type, userInfo?.uid);

  // Filtering information and Checking for Like and Rate
  useEffect(() => {
    if (!config || !responses) return;
    const data = responses.flatMap(({ results }) => results);
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
  }, [config, responses, liked, rated, type]);
  return { results: popular, fetchNextPage };
};
