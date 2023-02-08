import { getConfig } from "features/config/api";
import { useFirebaseContext } from "features/context/FirebaseContext";
import { useQuery } from "react-query";
import { fetchFriendMoviesList, fetchFriends, fetchMoviesFromList } from "./functions";

export const useFetchFriendMovies = () => {
  const {userInfo, db} = useFirebaseContext();
  const {data : config} = useQuery("config", getConfig);

  const {data : friendsList} = useQuery(["friends", userInfo, db], () => {
   return fetchFriends(userInfo, db);
  }, {
    enabled:!!userInfo && !!db,
  });

  const {data : moviesList} = useQuery(["list", friendsList, db], () => {
    return fetchFriendMoviesList(friendsList, db);
   }, {
     enabled:!!friendsList && !!db,
   });

   const {data : filteredMoviesList} = useQuery(["filtered", moviesList, config], () => {
    return fetchMoviesFromList(moviesList, config);
  }, {
    enabled:!!moviesList && !!config,
  });
  
  return filteredMoviesList;
}

