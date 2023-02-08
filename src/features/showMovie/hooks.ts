import { GetConfig } from "features/config/types";
import { filterProductionCompanies } from "features/movies/functions";
import { MovieData, ProductionCompany } from "features/movies/types";
import { useEffect, useState } from "react";

interface BackdropAndPoster {
  backdropURL:string;
  posterURL:string;
}

export const useBackdrop = (config : GetConfig | undefined, movieData : MovieData | undefined) => {
  const [backdropAndPoster, setBackdropAndPoster] = useState<BackdropAndPoster>();
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

export const useProductionCompanies = (config : GetConfig | undefined, movieData : MovieData | undefined) => {
  const [productionCompanies, setProductionCompanies] = useState<ProductionCompany[]>();
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