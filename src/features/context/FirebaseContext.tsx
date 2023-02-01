/* eslint-disable react-hooks/exhaustive-deps */
import { initializeUser } from "features/firebase/functions";
import config from "features/services/config";
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged, User } from "firebase/auth";
import { doc, getFirestore, setDoc } from "firebase/firestore";
import { createContext, useEffect, useState } from "react";
import { ContainerProps, Context, UserInfo } from "./types";

export const FirebaseContext = createContext<Context | null>(null);

export const FirebaseContextComponent = (props: ContainerProps) => {
  //getting firebase
  const app = initializeApp(config);
  const db = getFirestore(app);

  // User information state
  const [userInfo, setUserInfo] = useState<UserInfo>();

  //create Firebase and User Context

  // initializing firebase auth
  useEffect(() => {
    function initFirebaseAuth() {
      // Listen to auth state changes.
      onAuthStateChanged(getAuth(), authStateObserver);
    }
    const authStateObserver = (user: User | null) => {
      if (user) {
        console.log(user);
        const { displayName, photoURL, uid, email } = user;
        const location = `users/${uid}`;
        initializeUser(uid, db);
        setDoc(doc(db, location), {
          ...{ displayName, photoURL, uid, email },
        });
        if (displayName && photoURL && uid && email)
        setUserInfo({ displayName, photoURL, uid, email });
      } else {
        setUserInfo(undefined);
      }
    };
    initFirebaseAuth();
  }, []);

  return (
    <FirebaseContext.Provider value={{ db, app, userInfo, setUserInfo }}>
      {props.children}
    </FirebaseContext.Provider>
  );
};
