import { GetMovies } from '../movies/types';
import { FetchedSeriesObject } from '../series/types';
import { justasApi } from '../services/axios';

export const getPopular = async (
  type: 'movie' | 'series',
  page: number = 1,
  isInfinite?: boolean
) =>
  await justasApi<FetchedSeriesObject | GetMovies>(
    `/${type === 'movie' ? 'movie' : 'tv'}/popular?language=en-US&page=${page}`
  ).then(({ data }) => {
    return isInfinite ? data : data.results;
  });
