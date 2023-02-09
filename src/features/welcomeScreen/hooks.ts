import { useFirebaseContext } from "features/context/FirebaseContext";
import { UserInfo } from "features/context/types";
import { getDownloadURL, getStorage, ref } from "firebase/storage";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";

export const useBackground = () => {
  const storage = getStorage();
  const pathRef = ref(storage, "background.jpg");
  const {data : background} = useQuery(["link", pathRef], () => getDownloadURL(pathRef))
  return background
}

export const useDisplayName = () => {
  const [ displayName, setDisplayName ] = useState<string>();
  const { userInfo } = useFirebaseContext();
  useEffect(() => {
    if (!userInfo) return;
    setDisplayName(userInfo["displayName"].split(" ").slice(0, -1).join("."));

  }, [userInfo]);
  return displayName;
}