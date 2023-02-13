import { GetConfig } from "features/config/types";
import {
  deleteField,
  doc,
  DocumentData,
  Firestore,
  getDoc,
  updateDoc,
} from "firebase/firestore";
import {
  MovieData,
  MovieNumbersType,
  MovieObject,
  ProductionCompany,
} from "./types";

// Takes the general movie response and returns an array of only the required fields
export const filterMovieInformation = (
  config: GetConfig,
  movieResults: (MovieData | undefined)[]
) => {
  const movieArray: MovieObject[] = [];
  const baseUrl =
    config["images"]["base_url"] + config["images"]["poster_sizes"][5];
  movieResults.forEach((elem) => {
    if (!elem) return;
    const { title, release_date, poster_path, id } = elem;
    const imageURL = baseUrl + poster_path;
    movieArray.push({ title, release_date, imageURL, id });
  });
  return movieArray;
};

export const checkLikeAndRate = (
  moviesList: MovieObject[],
  likedMovieIds: string[],
  ratedMovies: DocumentData | undefined
) => {
  moviesList.forEach((elem) => {
    elem.liked = likedCheck(likedMovieIds, elem.id.toString())
    if(!ratedMovies) return;
    elem.rating = checkRating(ratedMovies, elem.id.toString())
  });
  return moviesList;
};

// export const checkMoviesArrayRating = (
//   moviesList: MovieObject[],
//   ratedMovies: DocumentData | undefined
// ) => {
//   if(!ratedMovies) return;
//   moviesList.forEach((elem) => {
//     elem.rating = checkRating(ratedMovies, elem.id.toString())
//   });
//   return moviesList;
// };

// export const checkLikeAndRate = (topData : MovieObject[], likedMovies : LikedMovies, ratedMovies : DocumentData | undefined) => {
//   const likeCheckedTopData = checkMoviesArrayLike(
//     topData,
//     Object.keys(likedMovies),
//     ratedMovies
//   );
//   return rateCheckedTopData;
// }

export const filterProductionCompanies = (
  configuration: GetConfig,
  array: ProductionCompany[]
) => {
  const baseURL =
    configuration["images"]["base_url"] +
    configuration["images"]["logo_sizes"][6];
  const sortedArray: ProductionCompany[] = [];

  array.forEach((elem) => {
    if (elem["logo_path"]) {
      const logoURL = baseURL + elem["logo_path"];
      const newObj = { ...elem, logo_path: logoURL };
      sortedArray.push(newObj);
    }
  });

  return sortedArray;
};

export const like = async (
  db: Firestore,
  movieId: string,
  userId: string,
  title: string,
  liked: boolean | undefined
) => {
  //gets the movie refference
  const movieRef = doc(db, "likedMovies", `${userId}`);
  //delete or add the movie based on liked state
  if (liked) {
    await updateDoc(movieRef, { [movieId]: deleteField() });
  } else {
    await updateDoc(movieRef, { [movieId]: title });
  }
};

interface LikedMovies {
  [field: string]: string;
  //movieId : movieName
}

export const fetchLiked = async (db: Firestore, userId: string | undefined) => {
  const docRef = doc(
    db,
    "likedMovies",
    `${userId}`
  );
  const document = await getDoc(docRef);
  const likedMovies = document.data() as LikedMovies;
  //console.log(likedMovies, "liked");

  return likedMovies;
};

export const likedCheck = (
  moviesArray: string[],
  currentMovie: string | undefined
) => {
  //returns true or false depending on if the movie was found in the liked list or not
  if (!currentMovie) return;
  return moviesArray.includes(currentMovie.toString());
};

export const rate = (
  db: Firestore,
  movieId: string,
  userId: string,
  rating: string | undefined
) => {
  // Gets the movie refference
  const movieRef = doc(db, "ratedMovies", `${userId}`);
  // Delete or add the movie based on liked state
  return updateDoc(movieRef, { [movieId]: rating });
};

export const fetchRated = async (db: Firestore, userId: string | undefined) => {
  const docRef = doc(
    db,
    "ratedMovies",
    `${userId}`
  );
  const document = await getDoc(docRef);
  const allFields = document.data();
  //console.log(allFields, "fetchRated");
  return allFields;
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
