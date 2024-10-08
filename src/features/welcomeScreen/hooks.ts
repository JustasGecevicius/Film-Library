import { useFirebaseContext } from '../context/FirebaseContext';
import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { getDownloadURL, getStorage, ref } from 'firebase/storage';

// A hook to use the specific background of the welcome page
export const useBackground = () => {
  const storage = getStorage();
  const pathRef = ref(storage, 'background.avif');
  const { data: background } = useQuery(
    ['link'],
    () => getDownloadURL(pathRef),
    {
      staleTime: Infinity,
    }
  );
  return background;
};
// A hook that returns only the first name of the user
export const useDisplayName = () => {
  const [displayName, setDisplayName] = useState<string>();
  const { userInfo } = useFirebaseContext();
  useEffect(() => {
    if (!userInfo) return;
    setDisplayName(userInfo.displayName.split(' ').slice(0, -1).join('.'));
  }, [userInfo]);
  return displayName;
};
