import { GetConfig } from "features/config/types";
import { MovieObject } from "features/movies/types";
import { doc, Firestore, getDoc } from "firebase/firestore";
import { FetchedSeriesObjectResults, LikedSeries, RatedSeries } from "./types";

export const fetchLikedSeries = async (db: Firestore, userId: string | undefined) => {
  const docRef = doc(
    db,
    "likedSeries",
    `${userId}`
  );
  const document = await getDoc(docRef);
  const likedSeries =  document.data() as LikedSeries;
  return likedSeries;
};

export const fetchRatedSeries = async (db: Firestore, userId: string | undefined) => {
  const docRef = doc(
    db,
    "ratedSeries",
    `${userId}`
  );
  const document = await getDoc(docRef);
  const ratedSeries = document.data() as RatedSeries;
  return ratedSeries;
};

export const filterSeriesInformation = (
  config: GetConfig,
  seriesResults: (FetchedSeriesObjectResults | undefined)[]
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