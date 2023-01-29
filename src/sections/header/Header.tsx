import React, { useContext, useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import "../../css/header.css";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { DB, UserContext } from "services/userContext";
import { doc, getFirestore, setDoc } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import config from "services/config";
import {
    getProfilePicUrl,
    getUserName,
    initializeUser,
    signInUser,
    signOutUser,
    userData,
} from "./userManagement";
import { api } from "./api";


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
            const location = "users/" + userInformation["id"] 
            initializeUser(userInformation["id"], db);
            setDoc(doc(db, location), {
                ...userInformation
            });
            setSignInInfo((prev: any) => userInformation);
        } else {
            setSignInInfo(null);
        }
    };
    useEffect(() => {
        initFirebaseAuth();
        const fetch = async () => {
            const iconFetch = await api();
            setIcons(iconFetch);
        };
        fetch();
    }, []);

    return (
        <>
            {icons ? (
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
                                Sign Out
                            </button>
                        ) : (
                            <button
                                className="signInButton"
                                onClick={() => {
                                    signInUser();
                                }}
                            >
                                Sign In
                            </button>
                        )}
                    </div>
                </header>
            ) : null}

            <Outlet />
        </>
    );
};
