import { GetMovies } from '../movies/types';
import { WatchProvidersData } from '../showMovieAndSeries/types';
import { FetchedSeriesObject } from '../series/types';
import { api } from '../services/axios';

export const getRecommendations = async (
  page = 1,
  id: number | undefined,
  type: 'movie' | 'series',
  isInfinite?: boolean
) =>
  await api<FetchedSeriesObject | GetMovies>(
    type === 'movie'
      ? `/movie/${id}/recommendations?api_key=${import.meta.env.VITE_MOVIE_API_TOKEN}&language=en-US&page=${page}`
      : `/tv/${id}/recommendations?api_key=${import.meta.env.VITE_MOVIE_API_TOKEN}&language=en-US&page=${page}`
  ).then(({ data }) => {
    return isInfinite ? data : data.results;
  });

export const getWatchProviders = async (
  id: number | string | undefined,
  type: 'movie' | 'series'
) => {
  return await api<WatchProvidersData>(
    type === 'movie'
      ? `/movie/${id}/watch/providers?api_key=${import.meta.env.VITE_MOVIE_API_TOKEN}`
      : `/tv/${id}/watch/providers?api_key=${import.meta.env.VITE_MOVIE_API_TOKEN}`
  ).then((response) => {
    return response.data.results;
  });
};
