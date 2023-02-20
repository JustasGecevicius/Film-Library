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
};

export const useFriendRatedSeries = () => {};

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
        return {...elem.data(), name : elem.id};
      });
      setFriendsData(newArr);
    };
    fetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [friendsList]);
  return friendsData;
};
