import { GetMovies } from '../movies/types';
import { FetchedSeriesObject } from '../series/types';
import { api } from '../services/axios';

export const getPopular = async (
  type: 'movie' | 'series',
  page: number = 1,
  isInfinite?: boolean
) =>
  await api<FetchedSeriesObject | GetMovies>(
    type === 'movie'
      ? `/movie/popular?api_key=${import.meta.env.VITE_MOVIE_API_TOKEN}&language=en-US&page=${page}`
      : `/tv/popular?api_key=${import.meta.env.VITE_MOVIE_API_TOKEN}&language=en-US&page=${page}`
  ).then(({ data }) => {
    return isInfinite ? data : data.results;
  });
