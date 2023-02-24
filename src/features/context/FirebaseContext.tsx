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
import { useQuery } from "react-query";


  // Create Firebase and User Context
export const FirebaseContext = createContext<Context | undefined>(undefined);

export const FirebaseContextComponent = (props: ContainerProps) => {
  // Getting firebase
  const app = initializeApp(config);
  const db = getFirestore(app);

  
  //const {data : location} = useQuery(["location"], getCurrentPosition)
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
        // Getting user Details
        const { displayName, photoURL : profileURL, uid, email } = user;
        const location = `users/${uid}`;
        // Setting up Firebase for that User
        initializeUser(db, uid, displayName, profileURL);
        // Saving the User in Firebase
        setDoc(doc(db, location), {
          ...{ displayName, profileURL, uid, email },
        });
        if (displayName && profileURL && uid && email)
        // Setting User Details in Firebase
        setUserInfo({ displayName, profileURL, uid, email });
      } else {
        setUserInfo(undefined);
      }
    };
    initFirebaseAuth();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    // Creating the Firebase Provider
    <FirebaseContext.Provider value={{ db, app, userInfo, setUserInfo }}>
      {props.children}
    </FirebaseContext.Provider>
  );
};
// A function to check if the context is used inside the Provider
export const useFirebaseContext = () => {
  const context = useContext(FirebaseContext);

  if (context === undefined) {
    throw new Error('useFirebaseContext must be used withing a UserContextProvider')
  }

  return context
}