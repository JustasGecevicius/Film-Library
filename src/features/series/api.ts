import { api } from '../services/axios';
import { GetSeriesSearchType, SeriesData } from './types';

export const getSeriesData = (seriesId?: string) => {
  if (!seriesId) return;
  return api<SeriesData>(
    `/tv/${seriesId}?api_key=${import.meta.env.VITE_MOVIE_API_TOKEN}&language=en-US`
  ).then((response) => {
    return response.data;
  });
};

export const getSeriesDataSearch = (searchString?: string) => {
  if (!searchString) return;
  return api<GetSeriesSearchType>(
    `/search/tv?api_key=${import.meta.env.VITE_MOVIE_API_TOKEN}&language=en-US&query=${searchString}&page=1&include_adult=false`
  ).then((response) => {
    return response.data.results;
  });
};
