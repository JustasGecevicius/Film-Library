import { getConfig } from "features/config/api";
import { useFirebaseContext } from "features/context/FirebaseContext";
import { useQuery } from "react-query";
import {
  fetchFriendLikedMoviesList,
  fetchFriendLikedSeriesList,
  fetchFriendRatedMoviesList,
  fetchFriends,
  fetchMoviesFromList,
  fetchSeriesFromList,
} from "./functions";

export const useFetchFriendLikedMovies = () => {
  const { userInfo, db } = useFirebaseContext();
  const { data: config } = useQuery("config", getConfig);

  const { data: friendsList } = useQuery(
    ["friends", userInfo, db],
    () => {
      return fetchFriends(userInfo, db);
    },
    {
      enabled: !!userInfo && !!db,
    }
  );

  const { data: moviesList } = useQuery(
    ["likedList", friendsList, db],
    () => {
      return fetchFriendLikedMoviesList(friendsList, db);
    },
    {
      enabled: !!friendsList && !!db,
    }
  );

  const { data: filteredMoviesList } = useQuery(
    ["filteredLikedMovies", moviesList, config],
    () => {
      return fetchMoviesFromList(moviesList, config);
    },
    {
      enabled: !!moviesList && !!config,
    }
  );

  return filteredMoviesList;
};

export const useFetchFriendRatedMovies = () => {
  const { userInfo, db } = useFirebaseContext();
  const { data: config } = useQuery("config", getConfig);

  const { data: friendsList } = useQuery(
    ["friends", userInfo, db],
    () => {
      return fetchFriends(userInfo, db);
    },
    {
      enabled: !!userInfo && !!db,
    }
  );

  const { data: moviesList } = useQuery(
    ["ratedList", friendsList, db],
    () => {
      return fetchFriendRatedMoviesList(friendsList, db);
    },
    {
      enabled: !!friendsList && !!db,
    }
  );

  const { data: filteredMoviesList } = useQuery(
    ["filteredRatedMovies", moviesList, config],
    () => {
      return fetchMoviesFromList(moviesList?.movies, config);
    },
    {
      enabled: !!moviesList && !!config,
    }
  );
  return [filteredMoviesList, moviesList?.ratings];
};

export const useFetchFriendLikedSeries = () => {
  const { userInfo, db } = useFirebaseContext();
  const { data: config } = useQuery("config", getConfig);

  const { data: friendsList } = useQuery(
    ["friends", userInfo, db],
    () => {
      return fetchFriends(userInfo, db);
    },
    {
      enabled: !!userInfo && !!db,
    }
  );

  const { data: seriesList } = useQuery(
    ["likedSeriesList", friendsList, db],
    () => {
      return fetchFriendLikedSeriesList(friendsList, db);
    },
    {
      enabled: !!friendsList && !!db,
    }
  );

  const { data: filteredSeriesList } = useQuery(
    ["filteredLikedSeries", seriesList, config],
    () => {
      return fetchSeriesFromList(seriesList, config);
    },
    {
      enabled: !!seriesList && !!config,
    }
  );

  return filteredSeriesList;
}

export const useFriendRatedSeries = () => {
  
}
