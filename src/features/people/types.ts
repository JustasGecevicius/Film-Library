export interface People{
    page:number;
    results: Person[];
    total_pages: number;
    total_results: number;
}

export interface Person{   
        adult: boolean;
        gender: number;
        id:number
        known_for: KnownFor[];
        known_for_department: string;
        name: string;
        popularity: number;
        profile_path: string;
}

interface KnownFor{
        adult: boolean
        backdrop_path: string
        genre_ids: number[]
        id: number
        media_type: string
        original_language: string
        original_title: string
        overview: string
        poster_path: string
        release_date: string
        title: string
        video: boolean
        vote_average: number;
        vote_count:number;
}

export interface SingularPerson {
        
                adult: boolean;
                also_known_as:string[]
                biography: string
                birthday: string
                deathday: string | null
                gender: number
                homepage: string | null
                id: number
                imdb_id: string
                known_for_department: string
                name: string
                place_of_birth: string
                popularity: number
                profile_path: string
            
}