import { api } from "services/axios";

import { GET_TRENDING_MOVIES_URL } from "./constants";

// Types
import { GetTrendingMovies } from "./types";

export const getTrendingMovies = async () =>
  await api<GetTrendingMovies>(GET_TRENDING_MOVIES_URL);
