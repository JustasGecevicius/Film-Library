import { useFirebaseContext } from '../context/FirebaseContext';
import { Firestore, doc, getDoc } from 'firebase/firestore';
import { useQuery } from 'react-query';

export const useGetUser = (id: string | undefined) => {
  const { db } = useFirebaseContext();
  const { data: userInfo } = useQuery(
    ['user'],
    () => {
      return fetchUser(id, db);
    },
    {
      enabled: !!id,
    }
  );
  return userInfo;
};

const fetchUser = async (id: string | undefined, db: Firestore) => {
  if (!id) return;
  const userPromise = getDoc(doc(db, 'users', id));
  const user = await userPromise;
  return user.data();
};
