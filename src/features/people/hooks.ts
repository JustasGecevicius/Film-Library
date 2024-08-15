import { useFirebaseContext } from '../context/FirebaseContext';
import { fetchFriends } from '../friends/functions';
import { useInfiniteQuery, useQuery } from 'react-query';
import { getPopularPeople } from './api';
import {
  fetchFriendLikedPeopleList,
  fetchPeopleFromList,
  filterPeopleInformation,
} from './functions';
import { useConfig } from '../../hooks';

export const usePopularPeople = () => {
  const { config } = useConfig();
  const { data: { pages: responses } = {}, fetchNextPage } = useInfiniteQuery(
    ['people'],
    ({ pageParam = 1 }) => getPopularPeople(pageParam, true),
    {
      getNextPageParam: (lastResponse) =>
        !Array.isArray(lastResponse) &&
        lastResponse.total_pages > lastResponse.page
          ? lastResponse.page + 1
          : undefined,
    }
  );
  const data = responses?.flatMap(({ results }) =>
    filterPeopleInformation(config, results)
  );
  return { results: data, fetchNextPage };
};

export const usePeopleLikedByFriends = () => {
  const { userInfo, db } = useFirebaseContext();
  const { config } = useConfig();
  const { data: friendsList } = useQuery(
    ['friends', userInfo, db],
    () => {
      return fetchFriends(userInfo, db);
    },
    {
      enabled: !!userInfo && !!db,
    }
  );

  const { data: friendLikedPeopleList } = useQuery(
    ['likedPeople', friendsList, db],
    () => {
      return fetchFriendLikedPeopleList(friendsList, db);
    },
    {
      enabled: !!friendsList && !!db,
    }
  );
  const { data: peopleDataList } = useQuery(
    ['filteredLikedSeries', friendLikedPeopleList, config],
    () => {
      return fetchPeopleFromList(friendLikedPeopleList, config);
    },
    {
      enabled: !!friendLikedPeopleList && !!config,
    }
  );

  return peopleDataList || [];
};
