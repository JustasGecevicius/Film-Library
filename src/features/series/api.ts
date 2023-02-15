import { api } from "features/services/axios";
import { SeriesData } from "./types";

export const getSeriesData = (seriesId: string | undefined) => {
  if (!seriesId) return;
  return api<SeriesData>(
    `/tv/${seriesId}?api_key=2e1d9e703d345ef35e7a54d9ac882a26&language=en-US`
  ).then((response) => {
    return response.data;
  });
};

export const getSeriesDataSearch = (searchString: string | undefined) => {
  if (!searchString) return;
  return api<any>(
    `/search/tv?api_key=2e1d9e703d345ef35e7a54d9ac882a26&language=en-US&query=${searchString}&page=1&include_adult=false`
  ).then((response) => {
    return response.data;
  });
};
