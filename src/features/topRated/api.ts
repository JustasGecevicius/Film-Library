import { GetMovies } from '../movies/types';
import { FetchedSeriesObject } from '../series/types';
import { justasApi } from '../services/axios';

// A function the returns information about the top rated movies or series
export const getTopRated = async (
  type: 'movie' | 'series',
  page = 1,
  isInfinite?: boolean
) =>
  await justasApi<FetchedSeriesObject | GetMovies>(
    `/${type === 'movie' ? 'movie' : 'tv'}/top_rated?language=en-US&page=${page}`
  ).then(({ data }) => {
    return isInfinite ? data : data.results;
  });
