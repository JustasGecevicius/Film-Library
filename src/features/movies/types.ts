import { GetConfig } from "features/config/types";

export interface GetTrendingMovies {
  page: number;
  results: GetTrendingMoviesResults[];
  total_pages: number;
  total_results: number;
}

interface GetTrendingMoviesResults {
  adult: boolean;
  backdrop_path: string | null;
  poster_path: string | null;
  original_title: string;
  release_date: string;
  vote_average: string;
  title: string;
}

export interface MovieData {
  adult: boolean;
  backdrop_path: string | null;
  belongs_to_collection: Object;
  budget: number;
  genres: Object[];
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string | null;
  production_companies: Object[];
  production_countries: Object[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: Object[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface FetchData{
  movieId: string,
  setConfig: React.Dispatch<React.SetStateAction<GetConfig | undefined>>,
  setData: React.Dispatch<React.SetStateAction<MovieData | undefined>>
}

export interface Array {
  id:number;
  logo_path:string;
  name:string;
  origin_country:string;
}

export interface BackdropType{
  backdropURL : string;
  posterURL: string;
}

export interface Company{
  id : number
  logo_path:string
  name:string
  origin_country:string
}

export interface LikeAndRateType {
  movieId: string;
  title: string;
}

export interface TagFixer {
  budget: number;
  revenue: number;
  runtime: number;
  voteAverage: number;
}

export interface MovieNumbersSymbol {
  tag: string;
  number: number;
}

export interface MovieBackdropType {
  backdrop: string;
  poster: string;
  title: string;
}