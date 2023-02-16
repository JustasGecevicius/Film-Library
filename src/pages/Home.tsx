// Styles
import "../css/home.css";
// Hooks
import { useBackground, useDisplayName } from "features/welcomeScreen/hooks";
// Components
import { Header } from "features/header/components/Header";

export const Home = () => {

  // Getting the background photo and the user name
  const background = useBackground();
  const displayName = useDisplayName();

  return background ? (
    <div
      className="background"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="backgroundCover">
        {" "}
        <Header></Header>
      </div>
      <div className="textWrap">
        {displayName ? (
          <h3>
            Welcome back <br /> {displayName}{" "}
          </h3>
        ) : (
          <h2>Discover</h2>
        )}
      </div>
    </div>
  ) : null;
};
