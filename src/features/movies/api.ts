// Base axios api
import { api } from "features/services/axios";

// Contstant
import { GET_TOP_RATED_URL, GET_TRENDING_MOVIES_URL } from "./constants";

// Types
import { GetMovies, MovieData } from "./types";

export const getTrendingMovies = async () =>
  await api<GetMovies>(GET_TRENDING_MOVIES_URL).then((response) => {
    return response.data;
  });

export const getTopRatedMovies = async () =>
  await api<GetMovies>(GET_TOP_RATED_URL).then((response) => {
    return response.data;
  });

export const getMovieData = (movieId: string | undefined) => {
  if (!movieId) return;
  return api<MovieData>(
    `/movie/${movieId}?api_key=2e1d9e703d345ef35e7a54d9ac882a26&language=en-US`
  ).then((response) => {
    return response.data;
  });
};

export const getMovieDataSearch = (searchString: string | undefined) => {
  if (!searchString) return;
  return api<GetMovies>(
    `/search/movie?api_key=2e1d9e703d345ef35e7a54d9ac882a26&language=en-US&query=${searchString}&page=1&include_adult=false`
  ).then((response) => {
    return response.data;
  });
};
