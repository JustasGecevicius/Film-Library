import { GetConfig } from "features/config/types";
import { PersonObject } from "features/displayPostersSection/types";
import { People, Person } from "./types";

export const filterPeopleInformation = (
  config: GetConfig | undefined,
  fetchPeopleResponse: Person[]
) => {
  const peopleArray: PersonObject[] = [];
  fetchPeopleResponse.forEach((elem) => {
    const imageURL = config
      ? `${config["images"]["base_url"]}${config["images"]["profile_sizes"][3]}${elem["profile_path"]}`
      : undefined;

      const {name, id} = elem;
      const personObject = {name, id, imageURL};

      peopleArray.push(personObject);
  });
  return peopleArray;
};
