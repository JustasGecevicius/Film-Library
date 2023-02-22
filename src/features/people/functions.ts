import { GetConfig } from "features/config/types";
import { PersonObject } from "features/displayPostersSection/types";
import { MovieCast, Person } from "./types";

// Returns an array to display in the ShowPeople Component
export const filterPeopleInformation = (
  config: GetConfig | undefined,
  fetchPeopleResponse: Person[]
) => {
  const peopleArray: PersonObject[] = [];
  fetchPeopleResponse.forEach((elem) => {
    const imageURL = config && elem.profile_path
      ? `${config.images.base_url}${config.images.profile_sizes[3]}${elem.profile_path}`
      : undefined;

      const {name, id} = elem;
      const personObject = {name, id, imageURL};
      if(imageURL)
      peopleArray.push(personObject);
  });
  return peopleArray;
};

// Return an array to display in the cast section in ShowMovieSeries
export const filterCastInformation = (
  config: GetConfig | undefined,
  fetchPeopleResponse: MovieCast[]
) => {
  const peopleArray: PersonObject[] = [];
  fetchPeopleResponse.forEach((elem) => {
    const imageURL = config && elem.profile_path
      ? `${config.images.base_url}${config.images.profile_sizes[3]}${elem.profile_path}`
      : undefined;

      const {name, id} = elem;
      const personObject = {name, id, imageURL};
      if(imageURL)
      peopleArray.push(personObject);
  });
  return peopleArray;
};
