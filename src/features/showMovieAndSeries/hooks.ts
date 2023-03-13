// API
import { getConfig } from "features/config/api";
// Types
import { MovieData, MovieObject } from "features/movies/types";
import { FetchedSeriesObjectResults, SeriesData } from "features/series/types";
import {
  BackdropAndPoster,
  ProductionCompany,
  WatchProvidersDataResultsProvider,
  WatchProvidersDataResultsSingle,
} from "./types";
// Hooks
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
// Functions
import { filterProductionCompanies } from "./functions";
import { getRecommendations, getWatchProviders } from "./api";
import {
  checkLikeAndRate,
  fetchLiked,
  fetchRated,
} from "features/likeAndRate/functions";
import { useFirebaseContext } from "features/context/FirebaseContext";
import { filterMovieInformation } from "features/movies/functions";
import { filterSeriesInformation } from "features/series/functions";
import { SingularPerson } from "features/people/types";

import { filterCastInformation } from "features/people/functions";
import { PersonObject } from "features/displayPostersSection/types";
import { getCreditsOfPerson } from "features/credits/api";
import { useCountry } from "features/location/hooks";
import _ from "lodash";
import { GetConfig } from "features/config/types";
// A hook to get the backdrop and poster images
// for the showMovie and showSeries pages
export const useBackdrop = (data: SeriesData | MovieData | undefined) => {
  const [backdropAndPoster, setBackdropAndPoster] =
    useState<BackdropAndPoster>();
  const { data: config } = useQuery("config", getConfig, {
    staleTime: 300000,
  });

  useEffect(() => {
    if (data && config) {
      const backdropURL =
        config.images.base_url +
        config.images.backdrop_sizes[3] +
        data.backdrop_path;
      const posterURL =
        config.images.base_url +
        config.images.poster_sizes[6] +
        data.poster_path;
      setBackdropAndPoster({ backdropURL, posterURL });
    }
  }, [config, data]);
  return backdropAndPoster;
};

export const useBackdropPerson = (data: SingularPerson | undefined) => {
  const { data: config } = useQuery("config", getConfig, {
    staleTime: 300000,
  });
  const [poster, setPoster] = useState<string | undefined>();
  useEffect(() => {
    if (config && data) {
      setPoster(
        config.images.base_url +
          config.images.profile_sizes[3] +
          data.profile_path
      );
      return;
    }
    setPoster(undefined);
  }, [config, data]);
  return poster;
};
// A hook to use the filtered production company data for a specific movie/series
export const useProductionCompanies = (
  data: SeriesData | MovieData | undefined
) => {
  const [productionCompanies, setProductionCompanies] =
    useState<ProductionCompany[]>();
  const { data: config } = useQuery("config", getConfig, {
    staleTime: 300000,
  });

  useEffect(() => {
    if (data && config) {
      const productionCompanyData = filterProductionCompanies(
        config,
        data.production_companies
      );
      setProductionCompanies(productionCompanyData);
    }
  }, [config, data]);
  return productionCompanies;
};

export const useRecommended = (
  id: number | undefined,
  page = 1,
  type: "movie" | "series"
) => {
  const [recommended, setRecommended] = useState<MovieObject[]>();
  const { userInfo, db } = useFirebaseContext();
  const { data: config } = useQuery("config", getConfig, {
    staleTime: 300000,
  });
  const { data } = useQuery(
    ["recommendations", id, type, page],
    () => {
      return getRecommendations(page, id, type);
    },
    {
      enabled: !!id,
    }
  );
  const { data: liked } = useQuery(
    ["liked", userInfo, db, type],
    () => fetchLiked(db, userInfo?.uid, type),
    { enabled: !!userInfo && !!db }
  );
  const { data: rated } = useQuery(
    ["rated", userInfo, db, type],
    () => fetchRated(db, userInfo?.uid, type),
    { enabled: !!userInfo && !!db }
  );
  // Filtering information and Checking for Like and Rate
  useEffect(() => {
    if (!config || !data || !liked || !rated) return;
    const trendingData =
      type === "movie"
        ? filterMovieInformation(config, data as MovieData[])
        : filterSeriesInformation(config, data as FetchedSeriesObjectResults[]);
    const likeAndRateCheckedData = checkLikeAndRate(
      trendingData,
      Object.keys(liked),
      rated
    );
    setRecommended(likeAndRateCheckedData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [config, data, liked, rated]);
  return recommended;
};

export const useMovieSeriesCast = (
  type: "movie" | "series",
  id: string | number | undefined
) => {
  const [credits, setCredits] = useState<PersonObject[]>();
  const { data: config } = useQuery("config", getConfig, {
    staleTime: 300000,
  });
  const { data } = useQuery(
    ["movieCredits", type, id],
    () => {
      return getCreditsOfPerson(id, type);
    },
    {
      enabled: !!type && !!id,
    }
  );
  useEffect(() => {
    if (!data) return;
    const filteredCredits = filterCastInformation(
      config,
      data.cast.splice(0, 19)
    );
    setCredits(filteredCredits);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);
  return credits;
};

const filterWatchProviders = (
  watchProviders: WatchProvidersDataResultsSingle,
  config : GetConfig | undefined
) => {
  console.log(watchProviders, "watch");
  if(!config) return;
  const baseUrl = `${config.images.base_url}${config.images.logo_sizes[6]}`;
  const { buy, flatrate, rent, free } = watchProviders;
  const sorted = _.sortBy({ buy, flatrate, rent, free }, [
    (option) => {
      return _.size(option);
    },
  ]);
  const filteredArray = sorted[3].map((elem) => {
    return {...elem, logo_path : `${baseUrl}${elem.logo_path}`}
  })
  return filteredArray;
};

export const useWatchProviders = (
  id: number | string | undefined,
  type: "movie" | "series"
) => {
  const [watchProviders, setWatchProviders] = useState<WatchProvidersDataResultsProvider[]>();
  const {data : config} = useQuery(["config"], getConfig);
  const { data: watchProvidersData } = useQuery(
    ["watchProviders", type, id],
    () => {
      return getWatchProviders(id, type);
    },
    {
      enabled: !!id && !!type,
    }
  );
  const country = useCountry();
  useEffect(() => {
    if (watchProvidersData && country && config && watchProvidersData[country]) {
      const filteredWatchProviders = filterWatchProviders(
        watchProvidersData[country], config
      );
      setWatchProviders(filteredWatchProviders);
    }
  }, [watchProvidersData, country, config]);
  return watchProviders;
};
