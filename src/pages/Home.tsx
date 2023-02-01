import { useContext, useEffect, useState } from "react";
import { getDownloadURL, getStorage, ref } from "firebase/storage";
import "../css/home.css";
import { SearchBar } from "reusableComponents/SearchBar";
import { FirebaseContext } from "features/context/FirebaseContext";

export const Home = () => {
  //FIIIIIX THIIIIS ANNYYYYYY?????
  const { userInfo } = useContext<any>(FirebaseContext);
  const [displayName, setDisplayName] = useState<string | undefined>();
  const storage = getStorage();
  const pathRef = ref(storage, "background.jpg");
  const [background, setBackground] = useState<string | undefined>();

  useEffect(() => {
    const fetch = async () => {
      const link = await getDownloadURL(pathRef);
      setBackground(link);
    };
    fetch();
  }, []);

  useEffect(() => {
    if (userInfo !== undefined && Object.keys(userInfo).length !== 0) {
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
