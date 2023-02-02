import { getConfig } from "features/config/api";
import { getTrendingMovies } from "features/movies/api";

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
