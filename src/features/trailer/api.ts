import { justasApi } from '../services/axios';
import { YoutubeApi } from './types';

export const getTrailer = async (movieName: string) => {
  return await justasApi<YoutubeApi>(
    `/youtube/search?moviename=${movieName}`
  ).then((response) => {
    return response.data;
  });
};
