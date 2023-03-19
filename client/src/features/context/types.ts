import { FirebaseApp } from "firebase/app";
import { Firestore } from "firebase/firestore";

export interface Context {
  db: Firestore;
  app?: FirebaseApp;
  userInfo: UserInfo | undefined;
  setUserInfo?: React.Dispatch<React.SetStateAction<UserInfo | undefined>>;
  darkTheme: boolean;
  setDarkTheme: React.Dispatch<React.SetStateAction<boolean>>;
}
export interface UserInfo {
  countryCode?: string;
  displayName: string;
  profileURL: string;
  uid: string;
  email: string;
}

export interface ContainerProps {
  children: React.ReactNode;
}