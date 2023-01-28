import { api } from "services/axios";
import { MovieData } from "./types";

export const getMovieData = async (movieId : string) => await api<MovieData>(`/movie/${movieId}?api_key=2e1d9e703d345ef35e7a54d9ac882a26&language=en-US`);