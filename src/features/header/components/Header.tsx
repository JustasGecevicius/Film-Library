import { Link, Outlet } from "react-router-dom";
import "features/header/css/header.css";
import { signInUser, signOutUser } from "../../firebase/functions";
import { fetchHeaderIcons } from "features/header/api";
import { useFirebaseContext } from "features/context/FirebaseContext";
import { useQuery } from "react-query";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  solid,
  brands,
  icon,
} from "@fortawesome/fontawesome-svg-core/import.macro";

export const Header = () => {
  const { userInfo } = useFirebaseContext();
  const { data } = useQuery("icons", fetchHeaderIcons, {
    staleTime: Infinity,
  });

  return (
    <>
      {data ? (
        <div className="headerWidth">
          <header>
            <Link to="/Film-Library">
              <div className="logoDiv">
                <h2>Discoverisms</h2>
              </div>
            </Link>
            <ul className="navigationButtons">
              <li className="navigationButton">
                <Link to="/Film-Library/Explore" className="navigationLink">
                <FontAwesomeIcon
                    icon={solid("film")}
                    className="navigationImage"
                  />
                  Explore
                </Link>
              </li>
              <li className="navigationButton">
                <Link to="/Film-Library/People" className="navigationLink">
                <FontAwesomeIcon
                    icon={solid("camera")}
                    className="navigationImage"
                  />
                  People
                </Link>
              </li>
              <li className="navigationButton">
                <Link to="/Film-Library/Friends" className="navigationLink">              
                  <FontAwesomeIcon
                    icon={solid("users")}
                    className="navigationImage"
                  />
                  Friends
                </Link>
              </li>
              <li className="navigationButton">
                <Link to="/Film-Library/UserProfile" className="navigationLink">
                <FontAwesomeIcon
                    icon={solid("user")}
                    className="navigationImage"
                  />
                  Account
                </Link>
              </li>
            </ul>
            <div className="userSignIn">
              <label className="switch">
                <input type="checkbox"></input>
                <span className="slider round"></span>
              </label>
              {userInfo ? (
                <div className="userInformationDisplay">
                  {userInfo.profileURL ? (
                    <img
                      alt="userImage"
                      className="userImage"
                      src={userInfo.profileURL}
                    />
                  ) : null}
                </div>
              ) : null}
              {userInfo ? (
                <button
                  className="signInButton"
                  onClick={() => {
                    signOutUser();
                  }}
                >
                  <FontAwesomeIcon
                    icon={solid("key")}
                    className="navigationImage"
                  />
                  Sign Out
                </button>
              ) : (
                <button
                  className="signInButton"
                  onClick={() => {
                    signInUser();
                  }}
                >
                  <FontAwesomeIcon
                    icon={solid("key")}
                    className="navigationImage"
                  />
                  Sign In
                </button>
              )}
            </div>
          </header>
        </div>
      ) : null}
      <Outlet />
    </>
  );
};
