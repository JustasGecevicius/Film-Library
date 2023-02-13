import { Link, Outlet } from "react-router-dom";
import "../../../css/header.css";
import { signInUser, signOutUser } from "../../firebase/functions";
import { fetchHeaderIcons } from "features/header/api";
import { useFirebaseContext } from "features/context/FirebaseContext";
import { useQuery } from "react-query";

export const Header = () => {
  const { userInfo } = useFirebaseContext();
  const { data } = useQuery("icons", fetchHeaderIcons);
  
  return (
    <>
      {data ? (
        <div className="headerWidth">
          <header>
            <Link to="/Film-Library">
              <div className="logoDiv">
                <img src={data["logo"]} alt="logoImage" className="logo" />
                <h2>Discoverisms</h2>
              </div>
            </Link>
            <ul className="navigationButtons">
              <li className="navigationButton">
                <Link to="/Film-Library/Explore" className="navigationLink">
                  <img
                    alt="exploreIcon.png"
                    className="navigationImage"
                    src={data["exploreIcon"]}
                  ></img>
                  Explore
                </Link>
              </li>
              <li className="navigationButton">
                <Link to="/Film-Library/People" className="navigationLink">
                  <img
                    src={data["cameraIcon"]}
                    alt="cameraIcon"
                    className="navigationImage"
                  />
                  People
                </Link>
              </li>
              <li className="navigationButton">
                <Link to="/Film-Library/Friends" className="navigationLink">
                  <img
                    src={data["friendsIcon"]}
                    alt="friendsIcon"
                    className="navigationImage"
                  />
                  Friends
                </Link>
              </li>
              <li className="navigationButton">
                <Link to="/Film-Library/UserProfile" className="navigationLink">
                  <img
                    src={data["userIcon"]}
                    alt="userIcon"
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
                  {userInfo.profileURL ? <img
                    alt="userImage"
                    className="userImage"
                    src={userInfo.profileURL}
                  /> : null}
                </div>
              ) : null}
              {userInfo ? (
                <button
                  className="signInButton"
                  onClick={() => {
                    signOutUser();
                  }}
                >
                  <img
                    className="loginImage"
                    src={data["loginIcon"]}
                    alt="login"
                  ></img>
                  Sign Out
                </button>
              ) : (
                <button
                  className="signInButton"
                  onClick={() => {
                    signInUser();
                  }}
                >
                  <img
                    className="loginImage"
                    src={data["loginIcon"]}
                    alt="login"
                  ></img>
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
