import { MovieObject } from "features/movies/types";
import {
  deleteField,
  doc,
  DocumentData,
  Firestore,
  getDoc,
  updateDoc,
} from "firebase/firestore";

// LIKING RELATED FUNCTIONS

export const like = (
  db: Firestore,
  movieId: string,
  userId: string,
  title: string,
  liked: boolean | undefined
) => {
  //delete or add the movie based on liked state
  if (liked) {
    updateDoc(doc(db, "likedMovies", `${userId}`), {
      [movieId]: deleteField(),
    });
    return;
  }
  updateDoc(doc(db, "likedMovies", `${userId}`), { [movieId]: title });
};

export const checkLike = (
  moviesArray: string[],
  currentMovie: string | undefined
) => {
  //returns true or false depending on if the movie was found in the liked list or not
  if (!currentMovie) return;
  return moviesArray.includes(currentMovie.toString());
};

export const fetchLiked = async (
  db: Firestore,
  userId: string | undefined,
  type: "movie" | "series"
) => {
  const docRef = doc(
    db,
    type === "movie" ? "likedMovies" : "likedSeries",
    `${userId}`
  );
  const document = await getDoc(docRef);
  const liked = document.data();
  return liked;
};

// RATING RELATED FUNCTIONS

export const rate = (
  db: Firestore,
  movieId: string,
  userId: string,
  rating: string | undefined
) => {
  // Delete or add the movie based on rate state
  if (rating === undefined) {
    updateDoc(doc(db, "ratedMovies", `${userId}`), {
      [movieId]: deleteField(),
    });
    return;
  }
  updateDoc(doc(db, "ratedMovies", `${userId}`), { [movieId]: rating });
};

export const checkRating = (
  ratedMovies: DocumentData,
  currentMovieId: string | undefined
) => {
  if (!currentMovieId) return;
  if (Object.keys(ratedMovies).includes(currentMovieId)) {
    return ratedMovies[currentMovieId];
  } else return undefined;
};

export const fetchRated = async (
  db: Firestore,
  userId: string | undefined,
  type: "movie" | "series"
) => {
  const docRef = doc(
    db,
    type === "movie" ? "ratedMovies" : "ratedSeries",
    `${userId}`
  );
  const document = await getDoc(docRef);
  const allFields = document.data();
  return allFields;
};

// FUNCTIONS RELATED TO BOTH

export const checkLikeAndRate = (
  moviesList: MovieObject[],
  likedMovieIds: string[],
  ratedMovies: DocumentData | undefined
) => {
  moviesList.forEach((elem) => {
    elem.liked = checkLike(likedMovieIds, elem.id.toString());
    if (!ratedMovies) return;
    elem.rating = checkRating(ratedMovies, elem.id.toString());
  });
  return moviesList;
};
