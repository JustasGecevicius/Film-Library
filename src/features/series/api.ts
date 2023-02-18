// API
import { api } from "features/services/axios";
// Types
import { SeriesData } from "./types";

export const getSeriesData = (seriesId: string | undefined) => {
  if (!seriesId) return;
  return api<SeriesData>(
    `/tv/${seriesId}?api_key=2e1d9e703d345ef35e7a54d9ac882a26&language=en-US`
  ).then((response) => {
    return response.data;
  });
};

export interface Series{  
  adult: boolean;
  backdrop_path: string;
  genre_ids:number[];
  id: number
  origin_country:string[]
  original_language: string
  original_name: string
  overview: string
  popularity: number;
  poster_path: string
  first_air_date: string
  name: string;
  vote_average: number
  vote_count: number
}

interface GetSeries {  
    page: number;
    results: Series[];
    total_pages: number
    total_results: number
}

export const getSeriesDataSearch = (searchString: string | undefined) => {
  if (!searchString) return;
  return api<GetSeries>(
    `/search/tv?api_key=2e1d9e703d345ef35e7a54d9ac882a26&language=en-US&query=${searchString}&page=1&include_adult=false`
  ).then((response) => {
    return response.data.results;
  });
};
