import { api } from "features/services/axios";

import { GET_TOP_RATED_URL, GET_TRENDING_MOVIES_URL } from "./constants";

// Types
import { GetTrendingMovies, MovieData } from "./types";

export const getTrendingMovies = async () =>
    await api<GetTrendingMovies>(GET_TRENDING_MOVIES_URL);

export const getTopRatedMovies = async () => await api(GET_TOP_RATED_URL);

export const getMovieData = async (movieId: string) =>
    await api<MovieData>(
        `/movie/${movieId}?api_key=2e1d9e703d345ef35e7a54d9ac882a26&language=en-US`
    );

