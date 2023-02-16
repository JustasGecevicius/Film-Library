// Types
import { GetMovies } from "features/movies/types";
import { FetchedSeriesObject } from "features/series/types";
// API
import { api } from "features/services/axios";

// A function the returns information about the top rated movies or series
export const getTopRated = async (type: "movie" | "series", page = 1) =>
  await api<FetchedSeriesObject | GetMovies>(
    type === "movie"
      ? `/movie/top_rated?api_key=2e1d9e703d345ef35e7a54d9ac882a26&language=en-US&page=${page}`
      : `/tv/top_rated?api_key=2e1d9e703d345ef35e7a54d9ac882a26&language=en-US&page=${page}`
  ).then((response) => {
    return response.data.results;
  });
