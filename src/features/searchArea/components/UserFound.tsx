import { useFirebaseContext } from "features/context/FirebaseContext";
import { UserInfo } from "features/context/types";
import { doc, DocumentData, Firestore, updateDoc } from "firebase/firestore";

interface Props {
  name: string;
  id: DocumentData;
  URL: string;
}



const handleAddFriend = (id : DocumentData, name:string, userInfo: UserInfo | undefined, db:Firestore) => {
console.log(userInfo);
if(!userInfo) return;
  const ref = doc(db, "friends", userInfo.uid);
  updateDoc(ref, {
    [name] : id
  })
}

export const UserFound = ({ id, name, URL }: Props) => {

  const {userInfo, db} = useFirebaseContext();

  return <div className="foundUser">
    <img src={URL} alt="userImage"/>
    <p className="userName">{name}</p>
    <button onClick={() => {
      handleAddFriend(id, name, userInfo, db)
    }}>Add Friend</button>
  </div>;
};
