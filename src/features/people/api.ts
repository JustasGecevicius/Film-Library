import { justasApi } from '../services/axios';
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
  return justasApi<People>(`/person/popular?language=en-US&page=${page}`).then(
    ({ data }) => {
      return isInfinite ? data : data.results;
    }
  );
}

export const getPerson = (personId: string | undefined) => {
  return justasApi<SingularPerson>(`/person/${personId}?language=en-US`).then(
    (response) => {
      return response.data;
    }
  );
};

export const getPeopleDataSearch = (searchString: string | undefined) => {
  if (!searchString) return;
  return justasApi<People>(
    `/search/person?language=en-US&query=${searchString}&page=1&include_adult=false`
  ).then((response) => {
    return response.data.results;
  });
};
