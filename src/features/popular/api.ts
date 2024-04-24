import { GetMovies } from '../movies/types';
import { FetchedSeriesObject } from '../series/types';
import { api } from '../services/axios';

export const getPopular = async (type: 'movie' | 'series', page = 1) =>
  await api<FetchedSeriesObject | GetMovies>(
    type === 'movie'
      ? `/movie/popular?api_key=2e1d9e703d345ef35e7a54d9ac882a26&language=en-US&page=${page}`
      : `/tv/popular?api_key=2e1d9e703d345ef35e7a54d9ac882a26&language=en-US&page=${page}`
  ).then((response) => {
    return response.data.results;
  });
