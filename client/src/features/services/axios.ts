import axios from "axios";

export const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export const youtubeApi = axios.create({
  baseURL: "https://youtube.googleapis.com/youtube/v3/",
});

export const serverApi = axios.create({
  baseURL: "/api",
});
