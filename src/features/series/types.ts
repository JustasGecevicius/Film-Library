export interface LikedSeries {
  [field : string] : string;
  //SerieId : SeriesName
}

export interface RatedSeries {
  [field : string] : string;
  //SerieId : SeriesRating
}

export interface FetchedSeriesObjectResults {    
  backdrop_path: string;
  first_air_date: string;
  genre_ids: number[];
  id: number
  name: string;
  origin_country:string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  vote_average: number;
  vote_count: number;  
}

export interface FetchedSeriesObject {
page : number;
results : FetchedSeriesObjectResults[];
total_pages:number;
total_results:number;
}


export interface CreatedBy {
  id: number
        credit_id: string
        name: string
        gender: number
        profile_path: string
}

export interface Genres {
  id:number
  name:string
}

export interface LastEpisodeToAir{
      air_date: string;
      episode_number: number;
      id: number;
      name: string;
      overview: string;
      production_code: string;
      season_number: number;
      still_path: string;
      vote_average:number;
      vote_count:number;
}

export interface Networks {
  name: string;
  id:number;
  logo_path: string;
  origin_country: string;
}

export interface ProductionCompany {
  id: number;
  logo_path: string;
  name: string;
  origin_path: string;
}

export interface ProductionCountry {
  iso_3166_1: string;
  name: string;
}

export interface Season {
  air_date: string;
  episode_count:number;
  id:number;
  name:string;
  overview:string;
  poster_path:string;
  season_number:number;
}
export interface SpokenLanguages{
  english_name: string;
  iso_639_1:string;
  name:string;
}

export interface SeriesData {
  
    backdrop_path: string;
    created_by: CreatedBy[];
    episode_run_time:number[];
    first_air_date: string;
    genres:Genres[]
    homepage: string
    id: number
    in_production: boolean
    languages:string[]
    last_air_date: string
    last_episode_to_air: LastEpisodeToAir;
    name: string;
    next_episode_to_air: boolean;
    networks: Networks[];
    number_of_episodes: number;
    number_of_seasons:number;
    origin_country:string[];
    original_language: string;
    original_name: string;
    overview: string;
    popularity: number;
    poster_path: string;
    production_companies:ProductionCompany[]
    production_countries:ProductionCountry[];
    seasons:Season[]      
    spoken_languages:SpokenLanguages[];
    status: string;
    tagline:string;
    type:string;
    vote_average:number
    vote_count:number
  
}