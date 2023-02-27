import { api } from "features/services/axios";

import { GET_TRENDING_PEOPLE_URL } from "./constants";
import { People, SingularPerson } from "./types";

export const getPopularPeople = () =>
  api<People>(GET_TRENDING_PEOPLE_URL).then((response) => {
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


