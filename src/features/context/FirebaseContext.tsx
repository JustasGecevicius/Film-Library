/* eslint-disable react-hooks/exhaustive-deps */

// Firebase
import { initializeApp } from "firebase/app";
import { initializeUser } from "features/firebase/functions";
import { getAuth, onAuthStateChanged, User } from "firebase/auth";
import { doc, getFirestore, setDoc } from "firebase/firestore";
import config from "features/services/config";

// Hooks
import { createContext, useContext, useEffect, useState } from "react";

// Types
import { ContainerProps, Context, UserInfo } from "./types";

  // Create Firebase and User Context
export const FirebaseContext = createContext<Context | undefined>(undefined);

export const FirebaseContextComponent = (props: ContainerProps) => {
  // Getting firebase
  const app = initializeApp(config);
  const db = getFirestore(app);

  // User information state
  const [userInfo, setUserInfo] = useState<UserInfo>();

  // Initializing firebase auth
  useEffect(() => {
    function initFirebaseAuth() {
      // Listen to auth state changes.
      onAuthStateChanged(getAuth(), authStateObserver);
    }
    const authStateObserver = (user: User | null) => {
      if (user) {
        const { displayName, photoURL : profileURL, uid, email } = user;
        const location = `users/${uid}`;
        initializeUser(db, uid, displayName, profileURL);
        setDoc(doc(db, location), {
          ...{ displayName, profileURL, uid, email },
        });
        if (displayName && profileURL && uid && email)
        setUserInfo({ displayName, profileURL, uid, email });
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

export const useFirebaseContext = () => {
  const context = useContext(FirebaseContext);

  if (context === undefined) {
    throw new Error('useFirebaseContext must be used withing a UserContextProvider')
  }

  return context
}