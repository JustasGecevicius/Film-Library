import { getConfig } from "features/config/api";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { getTopRatedMovies, getTrendingMovies } from "./api";
import { filterMovieInformation } from "./functions";
import { MovieObject } from "./types";

export const useTrendingMovies = () => {
  const [ trendingMovies, setTrendingMovies ] = useState<MovieObject[]>();
  const { data: config } = useQuery("config", getConfig);
  const { data: trending } = useQuery("trending", getTrendingMovies);
  useEffect (() => {
    if(!config || !trending) return;
    const trendingData = filterMovieInformation(config, trending.results);
    setTrendingMovies(trendingData);
  },[config, trending]);
  return trendingMovies;
}

export const useTopMovies = () => {
  const [ topMovies, setTopMovies ] = useState<MovieObject[]>();
  const { data: config } = useQuery("config", getConfig);
  const { data: top } = useQuery("trending", getTopRatedMovies);
  useEffect (() => {
    if(!config || !top) return;
    const topData = filterMovieInformation(config, top.results);
    setTopMovies(topData);
  },[config, top]);
  return topMovies;
}