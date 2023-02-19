// Types
import { GetConfig } from "features/config/types";
import { MovieObject } from "features/movies/types";
import { FetchedSeriesObjectResults, SeriesData } from "./types";

export const filterSeriesInformation = (
  config: GetConfig,
  seriesResults: (SeriesData | FetchedSeriesObjectResults | undefined)[]
) => {
  const seriesArray: MovieObject[] = [];
  const baseUrl =
    config["images"]["base_url"] + config["images"]["poster_sizes"][5];
    seriesResults.forEach((elem) => {
    if (!elem) return;
    const { name : title, first_air_date : release_date, poster_path, id } = elem;
    const imageURL = baseUrl + poster_path;
    seriesArray.push({ title, release_date, imageURL, id });
  });
  return seriesArray;
};