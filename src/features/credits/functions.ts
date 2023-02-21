import { GetConfig } from "features/config/types";
import { MovieObject } from "features/movies/types";
import { Cast } from "features/people/types";

export const filterCreditsCastInformation = (
  config: GetConfig,
  cast: (Cast | undefined)[]
) => {
  const array: MovieObject[] = [];
  const baseUrl =
    config["images"]["base_url"] + config["images"]["poster_sizes"][5];

  cast.forEach((elem) => {
    if (!elem) return;
    const { title, release_date, poster_path, id } = elem;

    const imageURL = poster_path ? baseUrl + poster_path : undefined;
    if (imageURL) array.push({ title, release_date, imageURL, id });
  });
  return array;
};
