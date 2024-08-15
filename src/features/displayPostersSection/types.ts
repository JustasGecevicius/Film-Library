import type { SECTION_NAMES, TYPE_NAMES } from './constants/sections';

export interface MoviesPosterDisplayType {
  id?: number;
  section: keyof typeof SECTION_NAMES;
}

export interface PersonObject {
  name: string;
  imageURL: string | undefined;
  id?: number;
}

export interface PosterType {
  type: keyof typeof TYPE_NAMES;
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
