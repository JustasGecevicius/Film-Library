// Base axios api
import { justasApi } from '../services/axios';

// Types
import { MovieCreditsType, PersonCreditsType } from '../people/types';

// Returns the people that have acted in a movie/series

export const getCreditsOfMovieSeries = (
  person_id: string | number | undefined,
  type: 'movie' | 'series'
) => {
  if (!person_id) return;
  return justasApi<PersonCreditsType>(
    `/person/${person_id}/${type === 'movie' ? 'movie' : 'tv'}_credits?language=en-US`
  ).then((response) => {
    return response.data;
  });
};

// Returns the Movies or Series that the person has acted in
export const getCreditsOfPerson = (
  id: string | number | undefined,
  type: 'movie' | 'series'
) => {
  return justasApi<MovieCreditsType>(
    `/${type === 'movie' ? 'movie' : 'tv'}/${id}/credits?language=en-US`
  ).then((response) => {
    return response.data;
  });
};
