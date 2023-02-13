import { api } from "features/services/axios";
import { GET_POPULAR_SERIES_URL, GET_TOP_RATED_SERIES_URL } from "./constants";
import { FetchedSeriesObject, SeriesData } from "./types";

export const getTopRatedSeries = async () =>
  await api<FetchedSeriesObject>(GET_TOP_RATED_SERIES_URL).then((response) => {
    return response.data.results;
  });

export const getPopularSeries = async () =>
  await api<FetchedSeriesObject>(GET_POPULAR_SERIES_URL).then((response) => {
    return response.data.results;
  });

  export const getSeriesData = (seriesId: string | undefined) => {
    if (!seriesId) return;
    return api<SeriesData>(
      `/tv/${seriesId}?api_key=2e1d9e703d345ef35e7a54d9ac882a26&language=en-US`
    ).then((response) => {
      return response.data;
    });
  };

  export const getMovieDataSearch = (searchString: string | undefined) => {
    if (!searchString) return;
    return api<any>(
      `/search/tv?api_key=2e1d9e703d345ef35e7a54d9ac882a26&language=en-US&query=${searchString}&page=1&include_adult=false`
    ).then((response) => {
      return response.data;
    });
  };
