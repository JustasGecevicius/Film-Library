import { GET_POPULAR_MOVIES_URL } from "features/movies/constants";
import { GetMovies } from "features/movies/types";
import { GET_POPULAR_SERIES_URL } from "features/series/constants";
import { FetchedSeriesObject } from "features/series/types";
import { api } from "features/services/axios";

export const getPopular = async (type: "movie" | "series") =>
  await api<FetchedSeriesObject | GetMovies>(
    type === "movie" ? GET_POPULAR_MOVIES_URL : GET_POPULAR_SERIES_URL
  ).then((response) => {
    return response.data.results;
});