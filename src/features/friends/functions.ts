import { GetConfig } from "features/config/types";
import { UserInfo } from "features/context/types";
import { getMovieData } from "features/movies/api";
import { filterMovieInformation } from "features/movies/functions";
import { doc, Firestore, getDoc } from "firebase/firestore";
import { Friends } from "./types";

interface Data {
  [field: string]: string;
}

export const fetchFriends = async (
  userInfo: UserInfo | undefined,
  db: Firestore
) => {
  if (!userInfo) return;
  const ref = doc(db, "friends", userInfo.uid);
  const friends = await getDoc(ref);
  const data = friends.data() as Friends;
  return data;
};

export const fetchFriendLikedMoviesList = async (
  friendsList: Friends | undefined,
  db: Firestore
) => {
  if (!friendsList) return;
  const moviesList: string[] = [];
  const promiseArray = Object.values(friendsList).map((elem) => {
    const ref = doc(db, "likedMovies", elem);
    return getDoc(ref);
  });
  const responses = await Promise.all(promiseArray);
  responses.forEach((elem) => {
    const responseData = elem.data() as Data;
    Object.keys(responseData).forEach((elem) => {
      moviesList.push(elem);
    });
  });
  return moviesList;
};

interface MoviesListRated {
  ratings: string[];
  movies: string[];
}

export const fetchFriendRatedMoviesList = async (
  friendsList: Friends | undefined,
  db: Firestore
) => {
  if (!friendsList) return;
  const moviesList: MoviesListRated = { ratings: [], movies: [] };
  const promiseArray = Object.values(friendsList).map((elem) => {
    const ref = doc(db, "ratedMovies", elem);
    return getDoc(ref);
  });
  const response = await Promise.all(promiseArray);
  response.forEach((elem) => {
    const data = elem.data();
    if(!data) return;
    Object.keys(data).forEach(movieId => {
      moviesList.movies.push(movieId);
    })
  });
  response.forEach((elem) => {
    const data = elem.data();
    if(!data) return;
    Object.values(data).forEach(rating => {
      moviesList.ratings.push(rating);
    })
  });  
  return moviesList;
};

export const fetchMoviesFromList = async (
  list: string[] | undefined,
  config: GetConfig | undefined
) => {
  if (!list || !config) return;
  const promiseArray = list.map((elem) => {
    const movieData = getMovieData(elem);
    return movieData;
  });
  const filteredResponse = filterMovieInformation(
    config,
    await Promise.all(promiseArray)
  );
  return filteredResponse;
};
