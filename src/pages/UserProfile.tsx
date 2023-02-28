import { useFirebaseContext } from "features/context/FirebaseContext";
import { Backdrop } from "features/profile/backdrop/Backdrop";
import { useUserInfo } from "features/profile/hooks";
import { useSearchAreaImages } from "features/searchArea/hooks";

export const UserProfile = () => {
  const { userInfo, db } = useFirebaseContext();
  const userNumbers = useUserInfo(userInfo, db);
  const links = useSearchAreaImages();
  return (
    <div className="userProfile">
      <Backdrop
        links={links}
        profileImage={userInfo?.profileURL}
        userName={userInfo?.displayName}
        userNumbers={userNumbers}
      />
    </div>
  );
};
