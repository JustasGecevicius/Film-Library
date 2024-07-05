// API
import { getConfig } from '../config/api';
// Types
import { MovieData, MovieObject } from '../movies/types';
import { FetchedSeriesObjectResults, SeriesData } from '../series/types';
import {
  BackdropAndPoster,
  ProductionCompany,
  WatchProvidersDataResultsProvider,
  WatchProvidersDataResultsSingle,
} from './types';
// Hooks
import { useEffect, useState } from 'react';
import { useInfiniteQuery, useQuery } from 'react-query';
// Functions
import { filterProductionCompanies } from './functions';
import { getRecommendations, getWatchProviders } from './api';
import { checkLikeAndRate } from '../likeAndRate/functions';
import { useFirebaseContext } from '../context/FirebaseContext';
import { filterMovieInformation } from '../movies/functions';
import { filterSeriesInformation } from '../series/functions';
import { SingularPerson } from '../people/types';

import { filterCastInformation } from '../people/functions';
import { PersonObject } from '../displayPostersSection/types';
import { getCreditsOfPerson } from '../credits/api';
import { useCountry } from '../location/hooks';
import _ from 'lodash';
import { GetConfig } from '../config/types';
import { useLikedAndRated } from '../utils/firestore';
import { useConfig } from '../../hooks';
// A hook to get the backdrop and poster images
// for the showMovie and showSeries pages
export const useBackdrop = (data: SeriesData | MovieData | undefined) => {
  const [backdropAndPoster, setBackdropAndPoster] =
    useState<BackdropAndPoster>();
  const { config } = useConfig();

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
  const { config } = useConfig();
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
  const { config } = useConfig();

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

export const useRecommended = (type: 'movie' | 'series', id?: number) => {
  const [recommended, setRecommended] = useState<MovieObject[]>();
  const { userInfo, db } = useFirebaseContext();
  const { config } = useConfig();

  const { data: { pages: responses } = {}, fetchNextPage } = useInfiniteQuery(
    ['recommendationData', type, id],
    ({ pageParam = 1 }) => getRecommendations(pageParam, id, type, true),
    {
      getNextPageParam: (lastResponse) =>
        !Array.isArray(lastResponse) &&
        lastResponse.total_pages > lastResponse.page
          ? lastResponse.page + 1
          : undefined,
    }
  );

  const { liked, rated } = useLikedAndRated(db, type, userInfo?.uid);

  // Filtering information and Checking for Like and Rate
  useEffect(() => {
    if (!config || !responses) return;
    const data = responses.flatMap(({ results }) => results);
    const recommendedData =
      type === 'movie'
        ? filterMovieInformation(config, data as MovieData[])
        : filterSeriesInformation(config, data as FetchedSeriesObjectResults[]);
    if (!liked) {
      return setRecommended(recommendedData);
    }
    const likeAndRateCheckedData = checkLikeAndRate(
      recommendedData,
      Object.keys(liked),
      rated
    );
    setRecommended(likeAndRateCheckedData);
  }, [config, responses, type, liked, rated]);
  return { results: recommended, fetchNextPage };
};

export const useMovieSeriesCast = (
  type: "movie" | "series",
  id: string | number | undefined
) => {
  const [credits, setCredits] = useState<PersonObject[]>();
  const { config } = useConfig();
  const { data } = useQuery(
    ["movieSeriesCredits", type, id],
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
