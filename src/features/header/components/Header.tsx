import { Link } from "react-router-dom";
import "features/header/css/header.css";
import { signInUser, signOutUser } from "../../firebase/functions";
import { useFirebaseContext } from "features/context/FirebaseContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { NavigationIcon } from "./NavigationIcon";

export const Header = () => {
  const { userInfo } = useFirebaseContext();

  return (
    <div className="headerWidth">
      <header>
        <Link to="/Film-Library">
          <div className="logoDiv">
            <h2>Discoverisms</h2>
          </div>
        </Link>
        <ul className="navigationButtons">
          <NavigationIcon iconName={"film"} link={"Explore"} sectionName="Explore"/>
          <NavigationIcon iconName={"camera"} link={"People"} sectionName="People" />
          <NavigationIcon iconName={"users"} link={"Friends"} sectionName="Friends" />
          <NavigationIcon iconName={"user"} link={"UserProfile"} sectionName="Profile" />
        </ul>
        <div className="userSignIn">
          <label className="switch">
            <input type="checkbox"/>
            <span className="slider round"></span>
          </label>
          {userInfo && (
            <div className="userInformationDisplay">
              {userInfo.profileURL && (
                <img
                  alt="userImage"
                  className="userImage"
                  src={userInfo.profileURL}
                />
              )}
            </div>
          )}
          <button
            className="signInButton"
            onClick={() => {
              userInfo ? signInUser() : signOutUser();
            }}
          >
            <FontAwesomeIcon icon={solid("key")} className="navigationImage" />
            {userInfo ? "Sign Out" : "Sign In"}
          </button>
        </div>
      </header>
    </div>
  );
};
