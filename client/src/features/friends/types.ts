export interface Data {
  [field : string] : string;
}

export interface MoviesListRated {
  ratings: string[];
  movies: string[];
}

export interface SeriesListRated {
  ratings: string[];
  series: string[];
}