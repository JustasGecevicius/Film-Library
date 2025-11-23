import { justasApi } from '../services/axios';
import { GetMovies, MovieData } from './types';

export const getMovieData = (movieId?: string) => {
  if (!movieId) return;
  return justasApi<MovieData>(`/movie/${movieId}?language=en-US`).then(
    (response) => {
      return response.data;
    }
  );
};

export const getMovieDataSearch = (searchString?: string) => {
  if (!searchString) return;
  return justasApi<GetMovies>(
    `/search/movie?language=en-US&query=${searchString}&page=1&include_adult=false`
  ).then((response) => {
    return response.data.results;
  });
};
