import { MovieObject } from "features/movies/types";

export interface MoviesPosterDisplayType {
  arr: MovieObject[];
  sectionName: string;
}

export interface PeoplePosterDisplayType {
  arr: PersonObject[];
  sectionName: string;
}

export interface PersonObject{
  name: string;
  imageURL: string | undefined;
  id?: number;
}

export interface PosterType{
  type: "movie" | "series";
}
