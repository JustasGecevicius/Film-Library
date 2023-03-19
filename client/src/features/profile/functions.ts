import { GetConfig } from "features/config/types";
import { doc, Firestore, getDoc } from "firebase/firestore";

export const calculateRatings = (numbersArr: number[]) => {
  const numberOfDigits = [];
  for (let i = 1; i <= 10; i++) {
    const digitArr = numbersArr.filter((number) => number === i);
    numberOfDigits.push({x : i, y : digitArr.length});
  }
  console.log(numberOfDigits);
  return numberOfDigits;
};

export const fetchUserLiked = async (
  userId: string | undefined,
  db: Firestore,
  type: "movie" | "series"
) => {
  if (!userId) return;
  const likedPromise = getDoc(
    doc(db, `${type === "movie" ? "likedMovies" : "likedSeries"}` , userId)
  );
  const liked = await likedPromise;
  return liked.data()
};

export const fetchUserRated = async (
  userId: string | undefined,
  db: Firestore,
  type: "movie" | "series"
) => {
  if (!userId) return;
  const ratedPromise = getDoc(
    doc(db, `${type === "movie" ? "ratedMovies" : "ratedSeries"}` , userId)
  );
  const rated = await ratedPromise;
  return rated.data()
};
