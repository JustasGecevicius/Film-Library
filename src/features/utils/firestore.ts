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

  export const getMovieOrSeriesCollectionName = (
    type: string,
    option: 'rated' | 'liked' | 'wished'
  ) => {
    if (option === 'rated') {
      switch (type) {
        case 'movie':
          return 'ratedMovies';
        case 'series':
          return 'ratedSeries';
        default:
          return '';
      }
    } else if (option === 'liked') {
      switch (type) {
        case 'movie':
          return 'likedMovies';
        case 'series':
          return 'likedSeries';
        default:
          return '';
      }
    } else {
      return type === 'movie' ? 'wishedMovies' : type === 'series' ? 'wishedSeries' : '';
    }
  };

  export const useLikedAndRated = (
    db: Firestore,
    type: string,
    userId: string | undefined
  ) => {
    const { data: liked, isLoading: likedLoading } = useQuery(
      ['liked', type],
      () =>
        fetchFirestore(
          db,
          getMovieOrSeriesCollectionName(type, 'liked'),
          userId
        ),
      { enabled: !!userId && !!db }
    );
    const { data: rated, isLoading: ratedLoading } = useQuery(
      ['rated', type],
      () =>
        fetchFirestore(
          db,
          getMovieOrSeriesCollectionName(type, 'rated'),
          userId
        ),
      { enabled: !!userId && !!db }
    );
    return { liked, rated, isLoading: likedLoading || ratedLoading };
  };
