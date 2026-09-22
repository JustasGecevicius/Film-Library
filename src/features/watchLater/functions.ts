import { deleteField, doc, Firestore, setDoc } from 'firebase/firestore';
import { getMovieOrSeriesCollectionName } from '../utils/firestore';

export const updateWatchLater = (
  db: Firestore,
  id: string,
  userId: string,
  title: string,
  wished: boolean,
  type: 'movie' | 'series'
) =>
  setDoc(
    doc(db, getMovieOrSeriesCollectionName(type, 'wished'), userId),
    { [id]: wished ? deleteField() : title },
    { merge: true }
  );
