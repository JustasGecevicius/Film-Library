import { GetMovies } from '../movies/types';
import { WatchProvidersData } from '../showMovieAndSeries/types';
import { FetchedSeriesObject } from '../series/types';
import { api } from '../services/axios';

export const getRecommendations = async (
  page = 1,
  id: number | undefined,
  type: 'movie' | 'series'
) =>
  await api<FetchedSeriesObject | GetMovies>(
    type === 'movie'
      ? `/movie/${id}/recommendations?api_key=2e1d9e703d345ef35e7a54d9ac882a26&language=en-US&page=${page}`
      : `/tv/${id}/recommendations?api_key=2e1d9e703d345ef35e7a54d9ac882a26&language=en-US&page=${page}`
  ).then((response) => {
    return response.data.results;
  });

export const getWatchProviders = async (
  id: number | string | undefined,
  type: 'movie' | 'series'
) => {
  return await api<WatchProvidersData>(
    type === 'movie'
      ? `/movie/${id}/watch/providers?api_key=2e1d9e703d345ef35e7a54d9ac882a26`
      : `/tv/${id}/watch/providers?api_key=2e1d9e703d345ef35e7a54d9ac882a26`
  ).then((response) => {
    return response.data.results;
  });
};
