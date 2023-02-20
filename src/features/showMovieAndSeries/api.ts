import { GetMovies } from "features/movies/types";
import { FetchedSeriesObject } from "features/series/types";
import { api } from "features/services/axios"

export const getRecommendations = async ( page = 1, id:number | undefined, type: "movie" | "series") =>
  await api<FetchedSeriesObject | GetMovies>(
    type === "movie"
      ? `/movie/${id}/recommendations?api_key=2e1d9e703d345ef35e7a54d9ac882a26&language=en-US&page=${page}`
      : `/tv/${id}/recommendations?api_key=2e1d9e703d345ef35e7a54d9ac882a26&language=en-US&page=${page}`
  ).then((response) => {
    return response.data.results;
  });