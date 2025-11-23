import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
});

export const youtubeApi = axios.create({
  baseURL: 'https://youtube.googleapis.com/youtube/v3/',
});

export const justasApi = axios.create({
  baseURL: 'https://api.justasgecevicius.dev/film_library/',
  withCredentials: true,
});

export const localApi = axios.create({
  baseURL: 'http://localhost:5000/',
  withCredentials: true,
});
