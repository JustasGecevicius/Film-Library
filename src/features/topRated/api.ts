import { GetMovies } from '../movies/types';
import { FetchedSeriesObject } from '../series/types';
import { api } from '../services/axios';

// A function the returns information about the top rated movies or series
export const getTopRated = async (
  type: 'movie' | 'series',
  page = 1,
  isInfinite?: boolean
) =>
  await api<FetchedSeriesObject | GetMovies>(
    type === 'movie'
      ? `/movie/top_rated?api_key=${import.meta.env.VITE_MOVIE_API_TOKEN}&language=en-US&page=${page}`
      : `/tv/top_rated?api_key=${import.meta.env.VITE_MOVIE_API_TOKEN}&language=en-US&page=${page}`
  ).then(({ data }) => {
    return isInfinite ? data : data.results;
  });
