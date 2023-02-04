import { GetConfig } from "features/config/types";
import { PersonObject } from "features/displayPostersSection/types";
import { People } from "./types";

export const filterPeopleInformation = (
  config: GetConfig | undefined,
  fetchPeopleResponse: People
) => {
  const peopleArray: PersonObject[] = [];
  fetchPeopleResponse["results"].forEach((elem) => {
    const personObject = { name: "", imageURL: "", id:0 };
    const imageURL = config
      ? `${config["images"]["base_url"]}${config["images"]["profile_sizes"][3]}${elem["profile_path"]}`
      : undefined;

    personObject["name"] = elem["name"];
    if (imageURL) personObject["imageURL"] = imageURL;
        personObject["id"] = elem["id"];

    if (personObject["name"] && personObject["imageURL"] && personObject["id"])
      peopleArray.push(personObject);
  });
  return peopleArray;
};
