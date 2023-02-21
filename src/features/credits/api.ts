// Base axios api
import { api } from "features/services/axios";

// Types
import { PersonCreditsType } from "features/people/types";


export const getPersonCredits = (person_id: string | undefined, type : "movie" | "series") => {
  if (!person_id) return;
  return api<PersonCreditsType>(
    `/person/${person_id}/${type === "movie" ? "movie" : "tv"}_credits?api_key=2e1d9e703d345ef35e7a54d9ac882a26&language=en-US`
  ).then((response) => {
    return response.data;
  });
};
