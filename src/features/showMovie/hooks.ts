import { getConfig } from "features/config/api";
import { getMovieData } from "features/movies/api";
import { filterProductionCompanies } from "features/movies/functions";
import { ProductionCompany } from "features/movies/types";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";

interface BackdropAndPoster {
  backdropURL:string;
  posterURL:string;
}

export const useBackdrop = () => {
  const [backdropAndPoster, setBackdropAndPoster] = useState<BackdropAndPoster>();
  const { data: config } = useQuery("config", getConfig);
  const { movieId } = useParams();

  const { data: movieData } = useQuery(
    ["movie", movieId],
    () => {
      return getMovieData(movieId);
    },
    {
      enabled: !!movieId,
    }
  );

  useEffect(() => {
    if (movieData && config) {
      const backdropURL =
        config["images"]["base_url"] +
        config["images"]["backdrop_sizes"][3] +
        movieData["backdrop_path"];
      const posterURL =
        config["images"]["base_url"] +
        config["images"]["poster_sizes"][6] +
        movieData["poster_path"];
      setBackdropAndPoster({backdropURL, posterURL});
    }
  }, [config, movieData]);
  return backdropAndPoster;
}

export const useProductionCompanies = () => {
  const [productionCompanies, setProductionCompanies] = useState<ProductionCompany[]>();
  const { movieId } = useParams();

  const { data: movieData } = useQuery(
    ["movie", movieId],
    () => {
      return getMovieData(movieId);
    },
    {
      enabled: !!movieId,
    }
  );
  const { data: config } = useQuery("config", getConfig);
  useEffect(() => {
    if (movieData && config) {
      const productionCompanyData = filterProductionCompanies(
        config,
        movieData["production_companies"]
      ); 
      setProductionCompanies(productionCompanyData);  
    }
  }, [config, movieData]);
  return productionCompanies
}

export const useMovieData = () => {
  const { movieId } = useParams();

  const { data: movieData } = useQuery(
    ["movie", movieId],
    () => {
      return getMovieData(movieId);
    },
    {
      enabled: !!movieId,
    }
  );
  return movieData;
}