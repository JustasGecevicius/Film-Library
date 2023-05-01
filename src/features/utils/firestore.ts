import { Firestore, doc, getDoc } from "firebase/firestore";
import { useQuery } from "react-query";

export const fetchFirestore = async (
  db: Firestore,
  collection: string,
  document: string | undefined,
) => {
  if(!document) return;
  const docRef = doc(db, collection, document);
  const result = await getDoc(docRef);
  return result.data();
};

export const fetchFirestoreCount = async (
  db: Firestore,
  collection: string,
  document: string | undefined,
) => {
  if(!document) return;
  const docRef = doc(db, collection, document);
  const result = await getDoc(docRef);
  return Object.keys(result.data() || {}).length;
}

  export const getMovieOrSeriesCollectionName = (type: 'movie' | 'series', option: 'rated' | 'liked') => {
  if(option === 'rated'){
    switch (type){
      case 'movie':
        return 'ratedMovies';
      case 'series':
        return 'ratedSeries';
    }
  } else {
    switch (type){
      case 'movie':
        return 'likedMovies';
      case 'series':
        return 'likedSeries';
    }
  }
}

export const useLikedAndRated = (db: Firestore, type: 'movie' | 'series', userId: string | undefined) => {
  const { data: liked } = useQuery(
    ["liked", type],
    () => fetchFirestore(
      db,
      getMovieOrSeriesCollectionName(type, 'liked'),
      userId,
    ),
    { enabled: !!userId && !!db }
  );
  const { data: rated } = useQuery(
    ["rated", type],
    () => fetchFirestore(
      db,
      getMovieOrSeriesCollectionName(type, 'rated'),
      userId,
    ),
    { enabled: !!userId && !!db }
  );
  return {liked, rated}
}