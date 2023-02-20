import { api } from "features/services/axios";

import { GET_TRENDING_PEOPLE_URL } from "./constants";
import { People, SingularPerson } from "./types";

export const getPopularPeople = () =>
  api<People>(GET_TRENDING_PEOPLE_URL).then((response) => {
    return response.data.results;
  });



export const getPerson = (person_id : string | undefined) => {
  return api<SingularPerson>(`https://api.themoviedb.org/3/person/${person_id}?api_key=2e1d9e703d345ef35e7a54d9ac882a26&language=en-US`).then((response) => {
    return response.data
  })
}
