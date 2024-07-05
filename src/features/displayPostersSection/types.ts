export interface MoviesPosterDisplayType {
  id?: number;
  section: 'pop' | 'top' | 'recommended';
}

export interface PeoplePosterDisplayType {
  arr: PersonObject[];
  sectionName: string;
  link: string;
}

export interface PersonObject {
  name: string;
  imageURL: string | undefined;
  id?: number;
}

export interface PosterType {
  type: 'movie' | 'series';
}

export interface UserPosterType {
  imageURL: string;
  name: string;
  id: string;
}

export interface PosterDisplayUsersType {
  users: User[];
  sectionName: string;
}

export interface User {
  name: string;
  uid: string;
  profileURL: string;
}
