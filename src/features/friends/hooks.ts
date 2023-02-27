import { getConfig } from "features/config/api";
import { useFirebaseContext } from "features/context/FirebaseContext";
import {
  doc,
  DocumentData,
  DocumentSnapshot,
  getDoc,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import {
  fetchFriendLikedMoviesList,
  fetchFriendLikedSeriesList,
  fetchFriendRatedMoviesList,
  fetchFriendRatedSeriesList,
  fetchFriends,
  fetchMoviesFromList,
  fetchSeriesFromList,
} from "./functions";

// SERIES RELATED HOOKS

export const useFriendLikedSeries = () => {
  const { userInfo, db } = useFirebaseContext();
  const { data: config } = useQuery("config", getConfig, {
    staleTime: 300000,
  });

  const { data: friendsList } = useQuery(
    ["friends", userInfo, db],
    () => {
      return fetchFriends(userInfo, db);
    },
    {
      enabled: !!userInfo && !!db,
    }
  );

  const { data: friendLikedSeriesList } = useQuery(
    ["likedSeriesList", friendsList, db],
    () => {
      return fetchFriendLikedSeriesList(friendsList, db);
    },
    {
      enabled: !!friendsList && !!db,
    }
  );

  const { data: seriesDataList } = useQuery(
    ["filteredLikedSeries", friendLikedSeriesList, config],
    () => {
      return fetchSeriesFromList(friendLikedSeriesList, config);
    },
    {
      enabled: !!friendLikedSeriesList && !!config,
    }
  );

  return seriesDataList;
};

export const useFetchFriendRatedSeries = () => {
  const { userInfo, db } = useFirebaseContext();
  const { data: config } = useQuery("config", getConfig, {
    staleTime: 300000,
  });

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
    ["ratedSeriesList", friendsList, db],
    () => {
      return fetchFriendRatedSeriesList(friendsList, db);
    },
    {
      enabled: !!friendsList && !!db,
    }
  );

  const { data: filteredSeriesList } = useQuery(
    ["filteredRatedMovies", seriesList, config],
    () => {
      return fetchSeriesFromList(seriesList?.series, config);
    },
    {
      enabled: !!seriesList && !!config,
    }
  );
  return { filteredSeriesList, ratings: seriesList?.ratings };
};

// MOVIE RELATED HOOKS

export const useFetchFriendLikedMovies = () => {
  const { userInfo, db } = useFirebaseContext();
  const { data: config } = useQuery("config", getConfig, {
    staleTime: 300000,
  });

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
  const { data: config } = useQuery("config", getConfig, {
    staleTime: 300000,
  });

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
  return { filteredMoviesList, ratings: moviesList?.ratings };
};

// FRIEND RELATED HOOKS

export const useActiveFriends = () => {
  const [friendsData, setFriendsData] =
    useState<(DocumentData | undefined)[]>();
  const promiseArray: Promise<DocumentSnapshot<DocumentData>>[] = [];
  const { userInfo, db } = useFirebaseContext();
  const { data: friendsList } = useQuery(
    ["friends", userInfo, db],
    () => {
      return fetchFriends(userInfo, db);
    },
    {
      enabled: !!userInfo && !!db,
    }
  );
  useEffect(() => {
    let fetch = async () => {
      if (!friendsList) return;
      Object.keys(friendsList).forEach((elem) => {
        const result = getDoc(doc(db, `userNames/${elem}`));
        promiseArray.push(result);
      });
      const arrayResult = await Promise.all(promiseArray);

      const newArr = arrayResult.map((elem) => {
        return { ...elem.data(), name: elem.id };
      });
      setFriendsData(newArr);
    };
    fetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [friendsList]);
  return friendsData;
};
