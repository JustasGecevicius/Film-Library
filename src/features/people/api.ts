import { api } from '../services/axios';
import { People, SingularPerson } from './types';

export const getPopularPeople = (page = 1) =>
  api<People>(
    `/person/popular?api_key=2e1d9e703d345ef35e7a54d9ac882a26&language=en-US&page=${page}`
  ).then((response) => {
    return response.data.results;
  });

export const getPerson = (personId: string | undefined) => {
  return api<SingularPerson>(
    `/person/${personId}?api_key=2e1d9e703d345ef35e7a54d9ac882a26&language=en-US`
  ).then((response) => {
    return response.data;
  });
};

export const getPeopleDataSearch = (searchString: string | undefined) => {
  if (!searchString) return;
  return api<People>(
    `/search/person?api_key=2e1d9e703d345ef35e7a54d9ac882a26&language=en-US&query=${searchString}&page=1&include_adult=false`
  ).then((response) => {
    return response.data.results;
  });
};
