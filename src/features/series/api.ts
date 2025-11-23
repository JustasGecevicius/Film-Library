import { justasApi } from '../services/axios';
import { GetSeriesSearchType, SeriesData } from './types';

export const getSeriesData = (seriesId?: string) => {
  if (!seriesId) return;
  return justasApi<SeriesData>(`/tv/${seriesId}?language=en-US`).then(
    (response) => {
      return response.data;
    }
  );
};

export const getSeriesDataSearch = (searchString?: string) => {
  if (!searchString) return;
  return justasApi<GetSeriesSearchType>(
    `/search/tv?language=en-US&query=${searchString}&page=1&include_adult=false`
  ).then((response) => {
    return response.data.results;
  });
};
