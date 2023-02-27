import { UserInfo } from "features/context/types";
import { Firestore } from "firebase/firestore";

export interface UseContextAndParams {
  id: string | undefined;
  db: Firestore;
  userInfo: UserInfo | undefined;
}