import { GetConfig } from "features/config/types";
import { MovieObject } from "features/movies/types";
import { PersonCast } from "features/people/types";

export const filterPersonCreditsCastInformation = (
  config: GetConfig,
  cast: (PersonCast | undefined)[]
) => {
  const array: MovieObject[] = [];
  const baseUrl = config.images.base_url + config.images.poster_sizes[5];

  cast.forEach((elem) => {
    console.log(elem, "elem");
    if (!elem) return;
    const { title, release_date, poster_path, id } = elem;

    const imageURL = poster_path ? baseUrl + poster_path : undefined;
    if (imageURL) array.push({ title, release_date, imageURL, id });
  });
  return array;
};
