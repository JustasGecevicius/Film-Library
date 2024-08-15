import { useFirebaseContext } from '../../../context/FirebaseContext';
import { handleAddFriend } from '../../functions';
import { Friend, FriendIndex } from '../../types';

export const UserFound = ({
  uid,
  friendName,
  profileURL,
  setIndexToRemove,
  friendIndex,
}: Friend & FriendIndex) => {
  const { userInfo, db } = useFirebaseContext();

  return (
    <div className='foundUser'>
      <img src={profileURL} alt='userImage' />
      <p className='userName'>{friendName}</p>
      <button
        onClick={() => {
          handleAddFriend(uid, friendName, userInfo, db);
          setIndexToRemove(friendIndex);
        }}
      >
        Add Friend
      </button>
    </div>
  );
};
