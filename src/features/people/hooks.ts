import { useFirebaseContext } from "features/context/FirebaseContext";
import { PersonObject } from "features/displayPostersSection/types";
import { fetchFriends } from "features/friends/functions";
import { useState } from "react";
import { useQuery } from "react-query";
import { getPopularPeople } from "./api";
import { fetchFriendLikedPeopleList, fetchPeopleFromList, filterPeopleInformation } from "./functions";
import { useConfig } from "features/utils/moviedb";

export const usePopularPeople = (page = 1) => {
  const [popularPeople, setPopularPeople] = useState<PersonObject[]>();
  const { config } = useConfig();
  useQuery(["people", page], () => {
    return getPopularPeople(page)}, {
    enabled: !!config,
    onSuccess: (data) => {
      setPopularPeople(filterPeopleInformation(config, data));
    },
  });
  return popularPeople;
};

export const usePeopleLikedByFriends = () => {
  const { userInfo, db } = useFirebaseContext();
  const { config } = useConfig();
  const { data: friendsList } = useQuery(
    ["friends", userInfo, db],
    () => {
      return fetchFriends(userInfo, db);
    },
    {
      enabled: !!userInfo && !!db,
    }
  );

  const { data: friendLikedPeopleList } = useQuery(
    ["likedPeople", friendsList, db],
    () => {
      return fetchFriendLikedPeopleList(friendsList, db);
    },
    {
      enabled: !!friendsList && !!db,
    }
  );
  const { data: peopleDataList } = useQuery(
    ["filteredLikedSeries", friendLikedPeopleList, config],
    () => {
      return fetchPeopleFromList(friendLikedPeopleList, config);
    },
    {
      enabled: !!friendLikedPeopleList && !!config,
    }
  );

  return peopleDataList || [];
};
