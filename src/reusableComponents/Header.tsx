import React, { useContext, useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import "../css/header.css";
import { signInUser, signOutUser } from "../features/header/functions";
import { fetchHeaderIcons } from "features/header/api";
import { FirebaseContext } from "features/context/FirebaseContext";

export const Header = () => {
  const { userInfo } = useContext<any>(FirebaseContext);

  const [icons, setIcons] = useState();

  useEffect(() => {
    const fetch = async () => {
      const iconFetch = await fetchHeaderIcons();
      setIcons(iconFetch);
    };
    fetch();
  }, []);

  return (
    <>
      {icons ? (
        <div className="headerWidth">
          <header>
            <Link to="/Film-Library">
              <div className="logoDiv">
                <img src={icons["logo"]} alt="logoImage" className="logo" />
                <h2>Discoverisms</h2>
              </div>
            </Link>
            <ul className="navigationButtons">
              <li className="navigationButton">
                <Link to="/Film-Library/Explore" className="navigationLink">
                  <img
                    alt="exploreIcon.png"
                    className="navigationImage"
                    src={icons["exploreIcon"]}
                  ></img>
                  Explore
                </Link>
              </li>
              <li className="navigationButton">
                <Link to="/Film-Library/People" className="navigationLink">
                  <img
                    src={icons["cameraIcon"]}
                    alt="cameraIcon"
                    className="navigationImage"
                  />
                  People
                </Link>
              </li>
              <li className="navigationButton">
                <Link to="/Film-Library/Friends" className="navigationLink">
                  <img
                    src={icons["friendsIcon"]}
                    alt="friendsIcon"
                    className="navigationImage"
                  />
                  Friends
                </Link>
              </li>
              <li className="navigationButton">
                <Link to="/Film-Library/UserProfile" className="navigationLink">
                  <img
                    src={icons["userIcon"]}
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
                  <img
                    alt="userImage"
                    className="userImage"
                    src={userInfo["photoURL"]}
                  ></img>
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
                    src={icons["loginIcon"]}
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
                    src={icons["loginIcon"]}
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
