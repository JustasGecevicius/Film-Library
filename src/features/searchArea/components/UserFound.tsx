import { useFirebaseContext } from "features/context/FirebaseContext";
import { handleAddFriend, removeFriendFromDOM } from "../functions";
import { Friend, Props } from "../types";

export const UserFound = ({
  friendId,
  friendName,
  URL,
  setFilteredAnswers,
  filteredAnswers,
  friendIndex,
}: Props & Friend) => {
  
  const { userInfo, db } = useFirebaseContext();

  return (
    <div className="foundUser">
      <img src={URL} alt="userImage" />
      <p className="userName">{friendName}</p>
      <button
        onClick={() => {
          handleAddFriend(friendId, friendName, userInfo, db);
          removeFriendFromDOM(setFilteredAnswers, filteredAnswers, friendIndex);
        }}
      >
        Add Friend
      </button>
    </div>
  );
};
