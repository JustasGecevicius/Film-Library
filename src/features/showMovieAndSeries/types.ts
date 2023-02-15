export interface ProductionCompany {
  id: number;
  logo_path: string;
  name: string;
  origin_path: string;
}

export interface DataNumbersType {
  budget?: number;
  revenue?: number;
  runtime?: number;
  voteAverage?: number;
  last_air_date?: string;
  number_of_episodes?: number;
  number_of_seasons?: number;
}

export interface BackdropAndPoster {
  backdropURL: string;
  posterURL: string;
}