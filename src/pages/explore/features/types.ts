export interface GetTrendingMovies {
        page: number;
        results: GetTrendingMoviesResults[];
        total_pages: number;
        total_results: number;
      }
      
interface GetTrendingMoviesResults {
        adult: boolean;
        backdrop_path: string | null;
        poster_path: string | null;
        original_title: string;
        release_date: string;
        vote_average: string;
        title: string;
      }