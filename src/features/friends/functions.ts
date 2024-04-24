import { GetConfig } from '../config/types';
import { UserInfo } from '../context/types';
import { getMovieData } from '../movies/api';
import { filterMovieInformation } from '../movies/functions';
import { getSeriesData } from '../series/api';
import { filterSeriesInformation } from '../series/functions';
import { doc, Firestore, getDoc } from 'firebase/firestore';
import { Data, MoviesListRated, SeriesListRated } from './types';

// A FUNCTION TO FETCH THE LIST OF FRIENDS OF THE USER

export const fetchFriends = async (userInfo: UserInfo | undefined, db: Firestore) => {
  if (!userInfo) return;
  const friends = await getDoc(doc(db, 'friends', userInfo.uid));
  const data = friends.data() as Data;
  return data;
};

// SERIES RELATED FUNCTIONS

export const fetchFriendLikedSeriesList = async (
  friendsList: Data | undefined,
  db: Firestore
) => {
  if (!friendsList) return;
  const seriesList: string[] = [];
  const promiseArray = Object.values(friendsList).map((elem) =>
    getDoc(doc(db, 'likedSeries', elem))
  );
  const responses = await Promise.all(promiseArray);
  responses.forEach((likedSeriesList) => {
    const responseData = likedSeriesList.data() as Data;
    Object.keys(responseData).forEach((likedSeries) => {
      seriesList.push(likedSeries);
    });
  });
  return seriesList;
};

export const fetchFriendRatedSeriesList = async (
  friendsList: Data | undefined,
  db: Firestore
) => {
  if (!friendsList) return;
  const seriesList: SeriesListRated = { ratings: [], series: [] };
  const promiseArray = Object.values(friendsList).map((friend) =>
    getDoc(doc(db, 'ratedSeries', friend))
  );
  const response = await Promise.all(promiseArray);
  response.forEach((ratedSeriesList) => {
    const data = ratedSeriesList.data();
    if (!data) return;
    Object.keys(data).forEach((series_id) => {
      seriesList.series.push(series_id);
    });
  });
  response.forEach((ratedSeriesList) => {
    const data = ratedSeriesList.data();
    if (!data) return;
    Object.values(data).forEach((rating) => {
      seriesList.ratings.push(rating);
    });
  });
  return seriesList;
};

export const fetchSeriesFromList = async (
  list: string[] | undefined,
  config: GetConfig | undefined
) => {
  if (!list || !config) return;
  const promiseArray = list.map((id) => {
    const movieData = getSeriesData(id);
    return movieData;
  });
  const filteredResponse = filterSeriesInformation(
    config,
    await Promise.all(promiseArray)
  );
  return filteredResponse;
};

// MOVIES RELATED FUNCTIONS

export const fetchFriendLikedMoviesList = async (
  friendsList: Data | undefined,
  db: Firestore
) => {
  if (!friendsList) return;
  const moviesList: string[] = [];
  const promiseArray = Object.values(friendsList).map((elem) =>
    getDoc(doc(db, 'likedMovies', elem))
  );
  const responses = await Promise.all(promiseArray);
  responses.forEach((likedMoviesList) => {
    const responseData = likedMoviesList.data() as Data;
    Object.keys(responseData).forEach((likedMovie) => {
      moviesList.push(likedMovie);
    });
  });
  return moviesList;
};

export const fetchFriendRatedMoviesList = async (
  friendsList: Data | undefined,
  db: Firestore
) => {
  if (!friendsList) return;
  const moviesList: MoviesListRated = { ratings: [], movies: [] };
  const promiseArray = Object.values(friendsList).map((friend) =>
    getDoc(doc(db, 'ratedMovies', friend))
  );
  const response = await Promise.all(promiseArray);
  response.forEach((ratedMoviesList) => {
    const data = ratedMoviesList.data();
    if (!data) return;
    Object.keys(data).forEach((movieId) => {
      moviesList.movies.push(movieId);
    });
  });
  response.forEach((ratedMoviesList) => {
    const data = ratedMoviesList.data();
    if (!data) return;
    Object.values(data).forEach((rating) => {
      moviesList.ratings.push(rating);
    });
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
