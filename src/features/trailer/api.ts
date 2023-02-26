import { youtubeApi } from "features/services/axios";
import { YoutubeApi } from "./types";

export const getTrailer = async (movieName: string) => {
  console.log("getTrailer");
  return await youtubeApi<YoutubeApi>(
    `search?part=snippet&maxResults=1&q=${movieName}&type=video&videoEmbeddable=true&key=AIzaSyDkMa8qqmLWHN_AyoHy1Lg4yu7bfdZOQOE`
  ).then((response) => {
    return response.data;
  });
};
