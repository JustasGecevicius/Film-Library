import { GET_TOP_RATED_URL } from "features/movies/constants";
import { GetMovies } from "features/movies/types";
import { GET_TOP_RATED_SERIES_URL } from "features/series/constants";
import { FetchedSeriesObject } from "features/series/types";
import { api } from "features/services/axios";

export const getTopRated = async (type: "movie" | "series") =>
  await api<FetchedSeriesObject | GetMovies>(
    type === "movie" ? GET_TOP_RATED_URL : GET_TOP_RATED_SERIES_URL
  ).then((response) => {
    return response.data.results;
  });