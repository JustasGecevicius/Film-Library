import { MovieObject } from '../movies/types';
import { getMovieOrSeriesCollectionName } from '../utils/firestore';
import {
  deleteField,
  doc,
  DocumentData,
  Firestore,
  updateDoc,
} from 'firebase/firestore';

// LIKING RELATED FUNCTIONS

export const like = (
  db: Firestore,
  movieId: string,
  userId: string,
  title: string,
  liked: boolean | undefined,
  type: 'movie' | 'series'
) => {
  // Delete or add the movie to firebase based on liked state
  updateDoc(
    doc(db, getMovieOrSeriesCollectionName(type, 'liked'), `${userId}`),
    {
      [movieId]: liked ? deleteField() : title,
    }
  );
};

export const likePerson = (
  db: Firestore,
  person_id: string,
  userId: string,
  name: string,
  liked: boolean | undefined
) => {
  // Delete or add the movie to firebase based on liked state
  updateDoc(doc(db, 'likedPeople', `${userId}`), {
    [person_id]: liked ? deleteField() : name,
  });
};

export const checkIfLiked = (
  likedMovieIds: string[],
  movieId: string | undefined
) => {
  if (
    !Array.isArray(likedMovieIds) ||
    likedMovieIds.length === 0 ||
    typeof movieId !== 'string'
  )
    return false;
  // Returns true or false depending on if the movie was found in the liked list or not
  return likedMovieIds.includes(movieId);
};

// RATING RELATED FUNCTIONS

export const rate = (
  db: Firestore,
  id: string,
  userId: string,
  rating: number | undefined,
  type: 'movie' | 'series'
) => {
  updateDoc(
    doc(db, `${getMovieOrSeriesCollectionName(type, 'rated')}`, `${userId}`),
    {
      [id]: rating ? rating : deleteField(),
    }
  );
};

// Returns the rating if it was rated or undefined
export const checkRating = (
  ratedMovies?: DocumentData,
  currentMovieId?: string
) => {
  if (
    typeof ratedMovies !== 'object' ||
    Array.isArray(ratedMovies) ||
    !ratedMovies ||
    typeof currentMovieId !== 'string'
  )
    return undefined;

  if (Object.keys(ratedMovies).includes(currentMovieId)) {
    const rating = ratedMovies[currentMovieId];
    return typeof rating === 'number' ? rating : undefined;
  } else return undefined;
};

// FUNCTIONS RELATED TO BOTH

// Returns the movies list with liked and rating added as attributes
export const checkLikeAndRate = (
  moviesList: MovieObject[],
  likedMovieIds: string[],
  ratedMovies?: DocumentData
) => {
  moviesList.forEach((elem) => {
    if (typeof elem !== 'object' || Array.isArray(elem) || !elem?.id) return;
    elem.liked = checkIfLiked(likedMovieIds, elem.id.toString());
    elem.rating = checkRating(ratedMovies, elem.id.toString());
  });
  return moviesList;
};
