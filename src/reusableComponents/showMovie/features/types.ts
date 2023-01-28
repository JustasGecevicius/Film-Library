export interface MovieData {
    adult: boolean;
    backdrop_path: string | null;
    belongs_to_collection: Object;
    budget: number;
    genres: Object[];
    homepage: string;
    id: number;
    imdb_id: string;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string | null;
    production_companies: Object[];
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

export interface Array {
    id:number;
    logo_path:string;
    name:string;
    origin_country:string;
}
