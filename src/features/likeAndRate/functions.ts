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
  liked: boolean | undefined,
  type: "movie" | "series"
) => {
  // Delete or add the movie to firebase based on liked state
  if (liked) {
    if (type === "movie") {
      updateDoc(doc(db, "likedMovies", `${userId}`), {
        [movieId]: deleteField(),
      });
      return;
    } else {
      updateDoc(doc(db, "likedSeries", `${userId}`), {
        [movieId]: deleteField(),
      });
      return;
    }
  } else {
    if (type === "movie") {
      updateDoc(doc(db, "likedMovies", `${userId}`), { [movieId]: title });
    } else {
      updateDoc(doc(db, "likedSeries", `${userId}`), { [movieId]: title });
    }
  }
};

export const likePerson = (
  db: Firestore,
  person_id: string,
  userId: string,
  name: string,
  liked: boolean | undefined
) => {
  if (liked) {
    updateDoc(doc(db, "likedPeople", `${userId}`), {
      [person_id]: deleteField(),
    });
    return;
  }
  updateDoc(doc(db, "likedPeople", `${userId}`), { [person_id]: name });
};

export const checkIfLiked = (array: string[], value: string | undefined) => {
  // Returns true or false depending on if the movie was found in the liked list or not
  if (!value) return;
  return array.includes(value.toString());
};

// Returns the list of liked movies for a specific user from Firebase
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

export const fetchLikedPeople = async (
  db: Firestore,
  userId: string | undefined
) => {
  const docRef = doc(db, "likedPeople", `${userId}`);
  const document = await getDoc(docRef);
  const liked = document.data();
  return liked;
};

// RATING RELATED FUNCTIONS

export const rate = (
  db: Firestore,
  id: string,
  userId: string,
  rating: string | undefined,
  type: "movie" | "series"
) => {
  console.log(rating, "rating");
  // Delete or add the movie based on rate state
  console.log(rating, "rating");
  if (type === "movie") {
    if (rating === undefined) {
      updateDoc(doc(db, "ratedMovies", `${userId}`), {
        [id]: deleteField(),
      });
      return;
    }
    updateDoc(doc(db, "ratedMovies", `${userId}`), { [id]: rating });
  }
  // Delete or add the series based on rate state
  else if (type === "series") {
    if (rating === undefined) {
      updateDoc(doc(db, "ratedSeries", `${userId}`), {
        [id]: deleteField(),
      });
      return;
    }
    updateDoc(doc(db, "ratedSeries", `${userId}`), { [id]: rating });
  }
};

// Returns the Id if it was rated or undefined
export const checkRating = (
  ratedMovies: DocumentData,
  currentMovieId: string | undefined
) => {
  if (!currentMovieId) return;
  if (Object.keys(ratedMovies).includes(currentMovieId)) {
    return ratedMovies[currentMovieId];
  } else return undefined;
};

// Gets a list of rated movies from Firebase
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

// Returns the movies list with liked and rating added as attributes
export const checkLikeAndRate = (
  moviesList: MovieObject[],
  likedMovieIds: string[],
  ratedMovies: DocumentData | undefined
) => {
  moviesList.forEach((elem) => {
    elem.liked = checkIfLiked(likedMovieIds, elem.id.toString());
    if (!ratedMovies) return;
    elem.rating = checkRating(ratedMovies, elem.id.toString());
  });
  return moviesList;
};
