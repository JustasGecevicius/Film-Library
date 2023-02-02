import { FirebaseApp } from "firebase/app";
import { Firestore } from "firebase/firestore";

export interface Context {
  db: Firestore;
  app?: FirebaseApp;
  userInfo: UserInfo | undefined;
  setUserInfo?: React.Dispatch<React.SetStateAction<UserInfo | undefined>>;
}
export interface UserInfo {
  displayName: string;
  photoURL: string;
  uid: string;
  email: string;
}

export interface LikeAndRateContext{
  db: Firestore;
  userInfo: UserInfo | undefined;
}

export interface ContainerProps {
  children: React.ReactNode;
}