import { api } from "services/axios";

import { GET_TRENDING_MOVIES_URL, GET_TOP_RATED_URL } from "./constants";

import { GetTrendingMovies } from "./types";

export const getPopularMovies = async () => await api<GetTrendingMovies>(GET_TRENDING_MOVIES_URL);

export const getTopRatedMovies = async () => await api(GET_TOP_RATED_URL);
