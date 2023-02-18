import { DocumentData } from "firebase/firestore";

export interface Props {
  setFilteredAnswers: React.Dispatch<
    React.SetStateAction<Friend[] | undefined>
  >;
  filteredAnswers: Friend[] | undefined;
  friendIndex: number;
}

export interface Friend {
  friendName: string;
  uid: DocumentData;
  profileURL: string;
}

export interface FoundSearchType {
  id : number
  name : string
  URL : string
}

export interface FriendIndex {
  friendIndex : number,
  setIndexToRemove : React.Dispatch<React.SetStateAction<number>>
}

export interface SearchResultsPropsType {
  query: string;
}