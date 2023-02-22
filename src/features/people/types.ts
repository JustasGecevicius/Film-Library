export interface People {
  page: number;
  results: Person[];
  total_pages: number;
  total_results: number;
}

export interface Person {
  adult: boolean;
  gender: number;
  id: number;
  known_for: KnownFor[];
  known_for_department: string;
  name: string;
  popularity: number;
  profile_path: string;
}

export interface KnownFor {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  media_type: string;
  original_language: string;
  original_title: string;
  overview: string;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface SingularPerson {
  adult: boolean;
  also_known_as: string[];
  biography: string;
  birthday: string;
  deathday: string | null;
  gender: number;
  homepage: string | null;
  id: number;
  imdb_id: string;
  known_for_department: string;
  name: string;
  place_of_birth: string;
  popularity: number;
  profile_path: string;
}

export interface MovieCreditsType {
  cast: MovieCast[];
  crew: Crew[];
  id: number;
}

export interface PersonCreditsType {
  cast: PersonCast[];
  crew: Crew[];
  id: number;
}

export interface PersonCast {
  id: number;
  original_language: string;
  episode_count: number;
  overview: string;
  origin_country: string[];
  original_name: string;
  genre_ids: number[];
  name: string;
  media_type: "movie" | "tv";
  poster_path: string | null;
  first_air_date: string;
  vote_average: number;
  vote_count: number;
  character: string;
  backdrop_path: string | null;
  popularity: number;
  credit_id: string;
  original_title: string;
  video: boolean;
  release_date: string;
  title: string;
  adult: boolean;
}

export interface MovieCast {
  id: number;
  original_language: string;
  episode_count: number;
  overview: string;
  origin_country: string[];
  original_name: string;
  genre_ids: number[];
  name: string;
  media_type: "movie" | "tv";
  profile_path: string | null;
  first_air_date: string;
  vote_average: number;
  vote_count: number;
  character: string;
  backdrop_path: string | null;
  popularity: number;
  credit_id: string;
  original_title: string;
  video: boolean;
  release_date: string;
  title: string;
  adult: boolean;
}

export interface Crew {
  id: number;
  department: string;
  original_language: string;
  episode_count: number;
  job: string;
  overview: string;
  origin_country: string[];
  original_name: string;
  vote_count: number;
  name: string;
  media_type: string;
  popularity: number;
  credit_id: string;
  backdrop_path: string | null;
  first_air_date: string;
  vote_average: number;
  genre_ids: number[];
  poster_path: string | null;
  original_title: string;
  video: boolean;
  title: string;
  adult: boolean;
  release_date: string;
}

export interface PersonalFactsType {
  birthday: string;
  deathday: string | null;
  also_known_as: string[];
  place_of_birth: string;
}
