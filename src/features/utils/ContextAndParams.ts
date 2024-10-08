import { useFirebaseContext } from '../context/FirebaseContext';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import type { Firestore } from 'firebase/firestore';
import type { UserInfo } from '../context/types';

export interface UseContextAndParams {
  id: string | undefined;
  db: Firestore;
  userInfo: UserInfo | undefined;
}

export const useContextAndParams = () => {
  const { id = '' } = useParams();
  const { db, userInfo } = useFirebaseContext();
  const [data, setData] = useState<UseContextAndParams>({ id, userInfo, db });

  useEffect(() => {
    if (id && db && userInfo) {
      setData({ id, db, userInfo });
    }
  }, [id, db, userInfo]);
  return data;
};
