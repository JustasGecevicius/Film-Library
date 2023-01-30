//function
import { getConfig } from "features/config/api";
import { api } from "services/axios";

//types
import { FetchData, MovieData } from "./types";

export const getMovieData = async (movieId: string) =>
    await api<MovieData>(
        `/movie/${movieId}?api_key=2e1d9e703d345ef35e7a54d9ac882a26&language=en-US`
    );

export const fetchData = async ({movieId, setConfig, setData} : FetchData) => {
    //console.log(movieId, setConfig, setData);
    const { data: movieData } = await getMovieData(movieId);
    const { data: configuration } = await getConfig();
    setConfig(configuration);
    setData(movieData);
};
