import "../css/home.css";
import { SearchBar } from "features/searchArea/components/SearchBar";
import { useBackground, useDisplayName } from "features/welcomeScreen/hooks";

export const Home = () => {

const background = useBackground();
const displayName = useDisplayName();

  return background ? (
    <div
      className="background"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="backgroundCover"></div>
      <div className="textWrap">
        {displayName ? (
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
