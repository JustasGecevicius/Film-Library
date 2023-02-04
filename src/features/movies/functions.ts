import { GetConfig } from "features/config/types";
import {
  deleteField,
  doc,
  DocumentData,
  DocumentReference,
  Firestore,
  getDoc,
  updateDoc,
} from "firebase/firestore";
import { getMovieData } from "./api";
import {
  GetTrendingMovies,
  MovieNumbersType,
  MovieObjectType,
  ProductionCompany,
} from "./types";

export interface Objects {
  logo_path: string;
}

// Takes the general movie response and returns an array of only the required fields
export const filterMovieInformation = (
  config: GetConfig,
  fetchMovieResponse: GetTrendingMovies
) => {
  const movieArray: MovieObjectType[] = [];
  const baseUrl =
    config["images"]["base_url"] + config["images"]["poster_sizes"][5];
  fetchMovieResponse["results"].forEach((elem) => {
    const { title, release_date, poster_path, id } = elem;
    const imageURL = baseUrl + poster_path;

    if (title && release_date && poster_path && id)
      movieArray.push({ title, release_date, imageURL, id });
  });
  return movieArray;
};
// Takes in the configuration and production companies array and returns an array with full links
export const filterProductionCompanies = (
  configuration: GetConfig,
  array: ProductionCompany[]
) => {
  const baseURL = `${configuration["images"]["base_url"]}${configuration["images"]["logo_sizes"][6]}`;
  //console.log(array, "array");
  const sortedArray: ProductionCompany[] = [];

  array.forEach((elem) => {
    if (elem["logo_path"]) {
      const imageURL = baseURL + elem["logo_path"];
      const newObj = { ...elem, logo_path: imageURL };
      // console.log(newObj, "newObj");
      sortedArray.push(newObj);
    }
  });

  return sortedArray;
};
// A function to handle the functionality of liking a movie
export const like = async (
  db: Firestore,
  movieId: string,
  userId: string,
  title: string,
  liked: boolean,
  setLiked: React.Dispatch<React.SetStateAction<boolean>>
) => {
  // Gets the movie refference
  const movieRef = doc(db, "likedMovies", `${userId}`);
  // Delete or add the movie based on liked state
  if (liked) {
    await updateDoc(movieRef, { [movieId]: deleteField() });
  } else {
    await updateDoc(movieRef, { [movieId]: title });
  }
  // Setting the state of liked to the opposite
  setLiked(!liked);
};

// A function that fetches all the movies that the user has liked
// and then checks if the current movie is liked
export const fetchLiked = async (
  db: Firestore,
  userId: string,
  movieId: string,
  setLiked: React.Dispatch<React.SetStateAction<boolean>>
) => {
  const docRef: DocumentReference<DocumentData> = doc(
    db,
    "likedMovies",
    `${userId}`
  );
  const document = await getDoc(docRef);
  const allFields: DocumentData | undefined = document.data();
  setLiked(likedCheck(allFields, movieId));
};
// A function that checks if the movie is liked
export const likedCheck = (likedMovies: any, currentMovie: any) => {
  return Object.keys(likedMovies).includes(currentMovie);
};

// A function that handles the functionality of rating a movie
// Find a way to fix the rating type issue???
export const rate = (
  db: Firestore,
  movieId: string,
  userId: string,
  rating: string
) => {
  // Gets the movie refference
  const movieRef = doc(db, "ratedMovies", `${userId}`);
  // Delete or add the movie based on liked state
  return updateDoc(movieRef, { [movieId]: rating });
};

// A function that fetches all the rated movies by the user
// and later sets the rating for the current movie page
//if it is found
export const fetchRating = async (
  db: Firestore,
  userId: string,
  movieId: string,
  setRating: React.Dispatch<React.SetStateAction<string>>
) => {
  const docRef: DocumentReference<DocumentData> = doc(
    db,
    "ratedMovies",
    `${userId}`
  );
  const document = await getDoc(docRef);
  const allFields: DocumentData | undefined = document.data();
  if (!allFields) return;
  if (Object.keys(allFields).includes(movieId)) {
    setRating(allFields[movieId]);
  } else {
    setRating("X");
  }
};

// A function that converts big numbers into a smaller format
const symbolChecker = (number: number) => {
  let value: string;
  switch (Math.round(number).toString().length) {
    case 3:
      value = number.toString();
      break;
    case 4:
      value = Math.round(number / 1000).toString() + "k";
      break;
    case 5:
      value = Math.round(number / 1000).toString() + "k";
      break;
    case 6:
      value = Math.round(number / 1000).toString() + "k";
      break;
    case 7:
      value = Math.round(number / 1000000).toString() + "m";
      break;
    case 8:
      value = Math.round(number / 1000000).toString() + "m";
      break;
    case 9:
      value = Math.round(number / 1000000).toString() + "m";
      break;
    case 10:
      value = Math.round(number / 1000000000).toString() + "b";
      break;
    case 11:
      value = Math.round(number / 1000000000).toString() + "b";
      break;
    case 12:
      value = Math.round(number / 1000000000).toString() + "b";
      break;
    default:
      value = "0";
  }
  return value;
};

// A function that changes the tag names to a readable form
export const tagFixer = (props: MovieNumbersType) => {
  let newArr: [string, string][] = [];
  const arr: [string, number][] = Object.entries(props);
  arr.forEach((elem, index) => {
    newArr.push(["", ""]);
    newArr[index][1] = symbolChecker(elem[1]);
    switch (elem[0]) {
      case "budget":
        newArr[index][0] = "Budget";
        break;
      case "revenue":
        newArr[index][0] = "Revenue";
        break;
      case "runtime":
        newArr[index][0] = "Runtime";
        break;
      case "voteAverage":
        newArr[index][0] = "Vote";
        break;
      default:
        break;
    }
  });
  return newArr;
};
