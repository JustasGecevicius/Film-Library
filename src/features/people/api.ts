import { api } from '../services/axios';
import { People, SingularPerson, type Person } from './types';

export function getPopularPeople(
  page: number,
  isInfinite: true
): Promise<People>;
export function getPopularPeople(
  page: number,
  isInfinite: false
): Promise<Person[]>;
export function getPopularPeople(page = 1, isInfinite?: boolean) {
  return api<People>(
    `/person/popular?api_key=${import.meta.env.VITE_MOVIE_API_TOKEN}&language=en-US&page=${page}`
  ).then(({ data }) => {
    return isInfinite ? data : data.results;
  });
}

export const getPerson = (personId: string | undefined) => {
  return api<SingularPerson>(
    `/person/${personId}?api_key=${import.meta.env.VITE_MOVIE_API_TOKEN}&language=en-US`
  ).then((response) => {
    return response.data;
  });
};

export const getPeopleDataSearch = (searchString: string | undefined) => {
  if (!searchString) return;
  return api<People>(
    `/search/person?api_key=${import.meta.env.VITE_MOVIE_API_TOKEN}&language=en-US&query=${searchString}&page=1&include_adult=false`
  ).then((response) => {
    return response.data.results;
  });
};
