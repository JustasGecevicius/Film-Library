import { api } from '../services/axios';
import { GetMovies, MovieData } from './types';

export const getMovieData = (movieId?: string) => {
  if (!movieId) return;
  return api<MovieData>(
    `/movie/${movieId}?api_key=${import.meta.env.VITE_MOVIE_API_TOKEN}&language=en-US`
  ).then((response) => {
    return response.data;
  });
};

export const getMovieDataSearch = (searchString?: string) => {
  if (!searchString) return;
  return api<GetMovies>(
    `/search/movie?api_key=${import.meta.env.VITE_MOVIE_API_TOKEN}&language=en-US&query=${searchString}&page=1&include_adult=false`
  ).then((response) => {
    return response.data.results;
  });
};
