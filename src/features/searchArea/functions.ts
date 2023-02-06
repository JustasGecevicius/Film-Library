import { getConfig } from "features/config/api";
import { getTrendingMovies } from "features/movies/api";
import { DocumentData, QuerySnapshot } from "firebase/firestore";

import { useEffect, useState } from "react";

export const searchAreaImageLinksFetch = async () => {
  // fetching config and movie data
  const config = await getConfig();
  const trendingMovies = await getTrendingMovies();
  // creating the base url and
  const baseUrl =
    config["images"]["base_url"] + config["images"]["backdrop_sizes"][3];
  // Array for the Image links
  const imageLinksArray: string[] = [];
  // Pushing the image links into the array
  trendingMovies.results.forEach((movie) => {
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
  const ids : {name : string, id : DocumentData, URL : string}[] = [];
  query.forEach((elem) => {
    if(elem.id.toLowerCase().includes(searchString)){
      const {URL, id} = elem.data();
      ids.push({name : elem.id, id, URL});
    }
  })
  return ids.length !== 0 ? ids : undefined;
}