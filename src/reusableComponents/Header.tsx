import React, { useContext, useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import "../css/header.css"
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { DB, UserContext } from "features/services/userContext";
import { doc, setDoc } from "firebase/firestore";

import {
    initializeUser,
    signInUser,
    signOutUser,
    userData,
} from "../features/header/functions";
import { fetchHeaderIcons } from "features/header/api";


interface Props {}

export const Header: React.FC<Props> = () => {
    const { signInInfo, setSignInInfo } = useContext<any>(UserContext);
    const { db } = useContext<any>(DB);
    const [icons, setIcons] = useState();

    function initFirebaseAuth() {
        // Listen to auth state changes.
        onAuthStateChanged(getAuth(), authStateObserver);
    }
    const authStateObserver = (user: any) => {
        if (user) {
            const userInformation = userData(user);
            const location = "users/" + userInformation["id"];
            initializeUser(userInformation["id"], db);
            setDoc(doc(db, location), {
                ...userInformation,
            });
            setSignInInfo((prev: any) => userInformation);
        } else {
            setSignInInfo(null);
        }
    };
    useEffect(() => {
        initFirebaseAuth();
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
                                <img
                                    src={icons["logo"]}
                                    alt="logoImage"
                                    className="logo"
                                />
                                <h2>Discoverisms</h2>
                            </div>
                        </Link>
                        <ul className="navigationButtons">
                            <li className="navigationButton">
                                <Link
                                    to="/Film-Library/Explore"
                                    className="navigationLink"
                                >
                                    <img
                                        alt="exploreIcon.png"
                                        className="navigationImage"
                                        src={icons["exploreIcon"]}
                                    ></img>
                                    Explore
                                </Link>
                            </li>
                            <li className="navigationButton">
                                <Link
                                    to="/Film-Library/People"
                                    className="navigationLink"
                                >
                                    <img
                                        src={icons["cameraIcon"]}
                                        alt="cameraIcon"
                                        className="navigationImage"
                                    />
                                    People
                                </Link>
                            </li>
                            <li className="navigationButton">
                                <Link
                                    to="/Film-Library/Friends"
                                    className="navigationLink"
                                >
                                    <img
                                        src={icons["friendsIcon"]}
                                        alt="friendsIcon"
                                        className="navigationImage"
                                    />
                                    Friends
                                </Link>
                            </li>
                            <li className="navigationButton">
                                <Link
                                    to="/Film-Library/UserProfile"
                                    className="navigationLink"
                                >
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
                            {signInInfo ? (
                                <div className="userInformationDisplay">
                                    <img
                                        alt="userImage"
                                        className="userImage"
                                        src={signInInfo["photoURL"]}
                                    ></img>
                                    {/* <p className="userName">{signInInfo["name"]}</p> */}
                                </div>
                            ) : null}
                            {signInInfo ? (
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
