// API
import { getConfig } from "features/config/api";
// Types
import { MovieData } from "features/movies/types";
import { SeriesData } from "features/series/types";
import { BackdropAndPoster, ProductionCompany } from "./types";
// Hooks
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
// Functions
import { filterProductionCompanies } from "./functions";

// A hook to get the backdrop and poster images
// for the showMovie and showSeries pages
export const useBackdrop = (data: SeriesData | MovieData | undefined) => {
  const [backdropAndPoster, setBackdropAndPoster] =
    useState<BackdropAndPoster>();
  const { data: config } = useQuery("config", getConfig);

  useEffect(() => {
    if (data && config) {
      const backdropURL =
        config["images"]["base_url"] +
        config["images"]["backdrop_sizes"][3] +
        data["backdrop_path"];
      const posterURL =
        config["images"]["base_url"] +
        config["images"]["poster_sizes"][6] +
        data["poster_path"];
      setBackdropAndPoster({ backdropURL, posterURL });
    }
  }, [config, data]);
  return backdropAndPoster;
};
// A hook to use the filtered production company data for a specific movie/series
export const useProductionCompanies = (
  data: SeriesData | MovieData | undefined
) => {
  const [productionCompanies, setProductionCompanies] =
    useState<ProductionCompany[]>();
  const { data: config } = useQuery("config", getConfig);

  useEffect(() => {
    if (data && config) {
      const productionCompanyData = filterProductionCompanies(
        config,
        data["production_companies"]
      );
      setProductionCompanies(productionCompanyData);
    }
  }, [config, data]);
  return productionCompanies;
};
