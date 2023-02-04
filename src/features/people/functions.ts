// Types
import { GetConfig } from "features/config/types";
import { People, PeopleArray } from "./types";

// A function that takes in config and the people fetch response and return an array with people details
export const filterPeopleInformation = (
  config: GetConfig,
  fetchPeopleResponse: People
) => {
  const peopleArray: PeopleArray[] = [];
  fetchPeopleResponse["results"].forEach((elem) => {
    const { name } = elem;
    const imageURL = `${config["images"]["base_url"]}${config["images"]["profile_sizes"][3]}${elem["profile_path"]}`;
    if (name && imageURL) peopleArray.push({ name, imageURL });
  });
  return peopleArray;
};
