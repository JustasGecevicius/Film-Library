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
  friendId: DocumentData;
  URL: string;
}