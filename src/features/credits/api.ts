// Base axios api
import { api } from '../services/axios';

// Types
import { MovieCreditsType, PersonCreditsType } from '../people/types';

// Returns the people that have acted in a movie/series

export const getCreditsOfMovieSeries = (person_id: string | number | undefined, type : "movie" | "series") => {
  if (!person_id) return;
  return api<PersonCreditsType>(
    `/person/${person_id}/${type === "movie" ? "movie" : "tv"}_credits?api_key=2e1d9e703d345ef35e7a54d9ac882a26&language=en-US`
  ).then((response) => {
    return response.data;
  });
};

// Returns the Movies or Series that the person has acted in
export const getCreditsOfPerson = (
  id: string | number | undefined,
  type: "movie" | "series"
) => {
  return api<MovieCreditsType>(
    type === "movie"
      ? `/movie/${id}/credits?api_key=2e1d9e703d345ef35e7a54d9ac882a26&language=en-US`
      : `/tv/${id}/credits?api_key=2e1d9e703d345ef35e7a54d9ac882a26&language=en-US`
  ).then((response) => {
    return response.data;
  });
};


