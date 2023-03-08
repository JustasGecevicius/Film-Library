import { Link } from "react-router-dom";
import "features/header/css/header.css";
import { signInUser, signOutUser } from "../../firebase/functions";
import { useFirebaseContext } from "features/context/FirebaseContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { NavigationIcon } from "./NavigationIcon";
import { checkIfImageExists } from "../functions";
import { ToggleDarkLightSwitch } from "features/utils/ToggleDarkLightSwitch";
import { useState } from "react";

export const Header = () => {
  const { userInfo } = useFirebaseContext();
  const [ theme, setTheme ] = useState<"dark" | "light">("light");


  return (
    <header className="header">
      <Link to="/Film-Library">
        <div className="logoDiv">
          <h2>Discoverisms</h2>
        </div>
      </Link>
      <ul className="navigationButtons">
        <NavigationIcon
          iconName={"film"}
          link={"Explore"}
          sectionName="Explore"
        />
        <NavigationIcon
          iconName={"camera"}
          link={"People"}
          sectionName="People"
        />
        <NavigationIcon
          iconName={"users"}
          link={"Friends"}
          sectionName="Friends"
        />
        <NavigationIcon
          iconName={"user"}
          link={"UserProfile"}
          sectionName="Profile"
        />
      </ul>
      <div className="userSignIn">
        <ToggleDarkLightSwitch  setTheme={setTheme}></ToggleDarkLightSwitch>
        {userInfo && (
          <div className="userInformationDisplay">
            {checkIfImageExists("http://website/images/img.png") && (
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
            console.log(userInfo);
            userInfo ? signOutUser() : signInUser();
          }}
        >
          <FontAwesomeIcon icon={solid("key")} className="navigationImage" />
          {userInfo ? "Sign Out" : "Sign In"}
        </button>
      </div>
    </header>
  );
};
