import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "../css/header.css";
import {
    GoogleAuthProvider,
    signInWithPopup,
    getAuth,
    onAuthStateChanged,
    signOut,
} from "firebase/auth";
import { UserContext } from "services/userContext";

interface Props {}


export const Header: React.FC<Props> = () => {
    const {signInInfo, setSignInInfo} = useContext<any>(UserContext);



    async function signInUser() {
        // Sign in Firebase using popup auth and Google as the identity provider.
        var provider = new GoogleAuthProvider();
        await signInWithPopup(getAuth(), provider);
    }

    function signOutUser() {
        // Sign out of Firebase.
        signOut(getAuth());
    }
    function initFirebaseAuth() {
        // Listen to auth state changes.
        onAuthStateChanged(getAuth(), authStateObserver);
    }

    function getProfilePicUrl() {
        let auth = getAuth();
        if (auth.currentUser?.photoURL != null) {
            return auth.currentUser.photoURL || "";
        }
    }

    // Returns the signed-in user's display name.
    function getUserName() {
        const user = getAuth();
        if (user.currentUser?.displayName != null) {
            return user.currentUser.displayName;
        }
    }
    const authStateObserver = (user: any) => {
        if (user) {
            const userName = getUserName();
            const profilePic = getProfilePicUrl();
            const userId: string = user.uid;
            //console.log(userName, profilePic, userId);
            const userData = {
                name: userName,
                profilePicUrl: profilePic,
                id: userId,
            };
            setSignInInfo((prev:any) => userData);
        } else {
            setSignInInfo(null);
        }
    };

    initFirebaseAuth();

    return (
        <header>
            <Link to="/Film-Library">
                <div className="logoDiv">
                    <img src="logo.jpg" alt="logoImage" className="logo" />
                    <h2>Discoverisms</h2>
                </div>
            </Link>
            <ul className="navigationButtons">
                <li className="navigationButton">
                    <Link to="/Film-Library/Explore">
                        <img
                            alt="exploreIcon"
                            className="navigationImage"
                            src="exploreIcon.png"
                        ></img>
                        Explore
                    </Link>
                </li>
                <li className="navigationButton">
                    <Link to="/Film-Library/People">
                        <img
                            src="cameraIcon.png"
                            alt="cameraIcon"
                            className="navigationImage"
                        />
                        People
                    </Link>
                </li>
                <li className="navigationButton">
                    <Link to="/Film-Library/Friends">
                        <img
                            src="friendsIcon.png"
                            alt="friendsIcon"
                            className="navigationImage"
                        />
                        Friends
                    </Link>
                </li>
                <li className="navigationButton">
                    <Link to="/Film-Library/UserProfile">
                        <img
                            src="userIcon.png"
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
                {signInInfo ? (<div className="userInformationDisplay">
                    <img alt="userImage" className="userImage" src={signInInfo["profilePicUrl"]}></img>
                    <p className="userName">{signInInfo["name"]}</p>
                </div>) : (null)}                
                {signInInfo ? (
                    <button className="signInButton"
                        onClick={() => {
                            signOutUser();
                        }}
                    >
                        Sign Out
                    </button>
                ) : (
                    <button className="signInButton"
                        onClick={() => {
                            signInUser();
                        }}
                    >
                        Sign In
                    </button>
                )}
            </div>
        </header>
    );
};
