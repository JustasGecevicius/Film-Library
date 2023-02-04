export interface MoviesPosterDisplayType {
  arr: MovieObject[];
  sectionName: string;
}

export interface MovieObject {
  title:string;
  imageURL:string;
  release_date?: string;
  id?: number;
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
