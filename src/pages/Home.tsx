import { useEffect, useState } from "react";
import { getDownloadURL, getStorage, ref } from "firebase/storage";
import "../css/home.css";
import { SearchBar } from "features/searchArea/components/SearchBar";
import { useFirebaseContext } from "features/context/FirebaseContext";
import { useQuery } from "react-query";

export const Home = () => {
  const storage = getStorage();
  const pathRef = ref(storage, "background.jpg");

  const { userInfo } = useFirebaseContext();
  const {data : background} = useQuery(["link", pathRef], () => getDownloadURL(pathRef))

  const [displayName, setDisplayName] = useState<string | undefined>();

  useEffect(() => {
    if (userInfo !== undefined) {
      setDisplayName(userInfo["displayName"].split(" ").slice(0, -1).join("."));
    }
  }, [userInfo]);

  return background ? (
    <div
      className="background"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="backgroundCover"></div>
      <div className="textWrap">
        {userInfo && displayName ? (
          <h3>
            Welcome back <br /> {displayName}{" "}
          </h3>
        ) : (
          <h2>Discover</h2>
        )}
        <SearchBar />
      </div>
    </div>
  ) : null;
};
