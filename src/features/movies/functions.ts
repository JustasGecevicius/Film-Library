import { GetConfig } from "features/config/types";
import {
  MovieData,
  MovieObject,
} from "./types";

// Takes the general movie response and returns an array of only the required fields
export const filterMovieInformation = (
  config: GetConfig,
  movieResults: (MovieData | undefined)[]
) => {
  const movieArray: MovieObject[] = [];
  const baseUrl =
    config["images"]["base_url"] + config["images"]["poster_sizes"][5];
  movieResults.forEach((elem) => {
    if (!elem) return;
    const { title, release_date, poster_path, id } = elem;
    const imageURL = baseUrl + poster_path;
    movieArray.push({ title, release_date, imageURL, id });
  });
  return movieArray;
};
