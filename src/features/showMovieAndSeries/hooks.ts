import { getConfig } from "features/config/api";
import { MovieData } from "features/movies/types";
import { SeriesData } from "features/series/types";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { filterProductionCompanies } from "./functions";
import { BackdropAndPoster, ProductionCompany } from "./types";

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
