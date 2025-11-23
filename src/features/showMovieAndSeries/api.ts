import { GetMovies } from '../movies/types';
import { WatchProvidersData } from '../showMovieAndSeries/types';
import { FetchedSeriesObject } from '../series/types';
import { justasApi } from '../services/axios';

export const getRecommendations = async (
  page = 1,
  id: number | undefined,
  type: 'movie' | 'series',
  isInfinite?: boolean
) =>
  await justasApi<FetchedSeriesObject | GetMovies>(
    `/${type === 'movie' ? 'movie' : 'tv'}/${id}/recommendations?language=en-US&page=${page}`
  ).then(({ data }) => {
    return isInfinite ? data : data.results;
  });

export const getWatchProviders = async (
  id: number | string | undefined,
  type: 'movie' | 'series'
) => {
  return await justasApi<WatchProvidersData>(
    `/${type === 'movie' ? 'movie' : 'tv'}/${id}/watch/providers`
  ).then((response) => {
    return response.data.results;
  });
};
