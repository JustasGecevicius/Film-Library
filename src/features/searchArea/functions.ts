import { getConfig } from "features/config/api";
import { UserInfo } from "features/context/types";
import { getPopular } from "features/popular/api";
import { doc, DocumentData, Firestore, QuerySnapshot, updateDoc } from "firebase/firestore";

import { useEffect, useState } from "react";
import { Friend } from "./types";

export const searchAreaImageLinksFetch = async () => {
  // fetching config and movie data
  const config = await getConfig();
  const trendingMovies = await getPopular("movie");
  // creating the base url and
  const baseUrl =
    config["images"]["base_url"] + config["images"]["backdrop_sizes"][3];
  // Array for the Image links
  const imageLinksArray: string[] = [];
  // Pushing the image links into the array
  trendingMovies.forEach((movie) => {
    if (movie["backdrop_path"])
      imageLinksArray.push(`${baseUrl}${movie["backdrop_path"]}`);
  });
  return imageLinksArray;
};

export function useDebounce(value: string, delay: number) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}

export const searchUsers = (query : QuerySnapshot<DocumentData>, searchString : string) => {
  const ids : {friendName : string, friendId : DocumentData, URL : string}[] = [];
  query.forEach((elem) => {
    if(elem.id.toLowerCase().includes(searchString)){
      const {URL, id} = elem.data();
      ids.push({friendName : elem.id, friendId : id, URL});
    }
  })
  return ids.length !== 0 ? ids : undefined;
}

export const handleAddFriend = (
  id: DocumentData,
  name: string,
  userInfo: UserInfo | undefined,
  db: Firestore
) => {
  if (!userInfo) return;
  const ref = doc(db, "friends", userInfo.uid);
  updateDoc(ref, {
    [name]: id,
  });
};

export const removeFriendFromDOM = (
  setFilteredAnswers: React.Dispatch<
    React.SetStateAction<Friend[] | undefined>
  >,
  filteredAnswers: Friend[] | undefined,
  userIndex: number
) => {
  setFilteredAnswers((arr) => {
    if (!arr) return;
    return arr.splice(userIndex, 1);
  });
};
