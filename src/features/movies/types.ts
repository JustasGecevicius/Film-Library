import { GetConfig } from "features/config/types";

export interface GetMovies {
  page: number;
  results: MovieData[];
  total_pages: number;
  total_results: number;
}

export interface MovieData {
  adult: boolean;
  backdrop_path: string | null;
  belongs_to_collection: Object;
  budget: number;
  genres: MovieDataGenre[];
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string | null;
  production_companies: ProductionCompany[];
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

export interface MovieDataGenresType{
  genres : MovieDataGenre[] 
}

interface MovieDataGenre {
  id: number;
  name: string;
}

export interface LikeAndRateType {
  title: string;
  type : "movie" | "series"
}

export interface MovieBackdropType {
  backdrop: string;
  poster: string;
  title: string;
}

export interface MovieObject {
  title:string;
  imageURL:string;
  release_date: string;
  id: number;
  liked?:boolean;
  rating?:number;
}

export interface DescriptionType {
  overview: string;
}

export interface ProducedByType {
  productionCompanies: ProductionCompany[];
}

export interface ProductionCompany{
  id: number;
  logo_path: string;
  name:string;
  origin_path:string;
}

export interface VisitHomepageType {
  link: string;
}

