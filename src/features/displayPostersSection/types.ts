import { MovieData } from "features/movies/types";

export interface MoviesPosterDisplayType {
  arr: MovieData[] | undefined;
  sectionName: string;
}

export interface PeoplePosterDisplayType {
  arr: PersonObject[];
  sectionName: string;
}

export interface PersonObject{
  name: string;
  imageURL: string;
  id?: number;
}
