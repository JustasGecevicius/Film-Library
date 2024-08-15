import { useFirebaseContext } from '../context/FirebaseContext';
import { useEffect, useState } from 'react';
import { useInfiniteQuery } from 'react-query';
import { checkLikeAndRate } from '../likeAndRate/functions';
import { filterMovieInformation } from '../movies/functions';
import { filterSeriesInformation } from '../series/functions';
import { MovieData, MovieObject } from '../movies/types';
import { FetchedSeriesObjectResults } from '../series/types';
import { getTopRated } from './api';
import { useLikedAndRated } from '../utils/firestore';
import { useConfig } from '../../hooks';

// A hook that returns the Top Rated movies or series
export const useTop = (type: 'movie' | 'series') => {
  // State
  const [top, setTop] = useState<MovieObject[]>();
  // Context
  const { userInfo, db } = useFirebaseContext();
  // Data Query
  const { config } = useConfig();

  const { data: { pages: responses } = {}, fetchNextPage } = useInfiniteQuery(
    ['topData', type],
    ({ pageParam = 1 }) => getTopRated(type, pageParam, true),
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
      setTop(trendingData);
    } else if (liked && rated) {
      const likeAndRateCheckedTrendingData = checkLikeAndRate(
        trendingData,
        Object.keys(liked),
        rated
      );
      setTop(likeAndRateCheckedTrendingData);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [config, responses, liked, rated]);
  return { results: top, fetchNextPage };
};
