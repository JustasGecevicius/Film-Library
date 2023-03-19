import { GetConfig } from "features/config/types";
import { PersonObject } from "features/displayPostersSection/types";
import { Data } from "features/friends/types";
import { doc, Firestore, getDoc } from "firebase/firestore";
import { getPerson } from "./api";
import { MovieCast, SingularPerson, Person } from "./types";

// Returns an array to display in the ShowPeople Component
export const filterPeopleInformation = (
  config: GetConfig | undefined,
  fetchPeopleResponse: SingularPerson[] | Person[] | undefined
) => {
  const peopleArray: PersonObject[] = [];
  if(!fetchPeopleResponse) return;
  fetchPeopleResponse.forEach((elem) => {
    const imageURL =
      config && elem.profile_path
        ? `${config.images.base_url}${config.images.profile_sizes[3]}${elem.profile_path}`
        : undefined;

    const { name, id } = elem;
    const personObject = { name, id, imageURL };
    if (imageURL) peopleArray.push(personObject);
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
    const imageURL =
      config && elem.profile_path
        ? `${config.images.base_url}${config.images.profile_sizes[3]}${elem.profile_path}`
        : undefined;

    const { name, id } = elem;
    const personObject = { name, id, imageURL };
    if (imageURL) peopleArray.push(personObject);
  });
  return peopleArray;
};

export const fetchFriendLikedPeopleList = async (
  friendsList: Data | undefined,
  db: Firestore
) => {
  if (!friendsList) return;
  const peopleList: string[] = [];
  const promiseArray = Object.values(friendsList).map((elem) =>
    getDoc(doc(db, "likedPeople", elem))
  );
  const responses = await Promise.all(promiseArray);
  responses.forEach((likedPeopleList) => {
    const responseData = likedPeopleList.data() as Data;
    if(!responseData) return;
    Object.keys(responseData).forEach((likedPersonId) => {
      peopleList.push(likedPersonId);
    });
  });
  return peopleList;
};

export const fetchPeopleFromList = async (
  list: string[] | undefined,
  config: GetConfig | undefined
) => {
  if (!list || !config) return;
  const promiseArray = list.map((id) => {
    const data = getPerson(id);
    return data;
  });
  const filteredResponse = filterPeopleInformation(
    config,
    await Promise.all(promiseArray)
  );
  return filteredResponse;
};
