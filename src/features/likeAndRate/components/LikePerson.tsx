import { useFirebaseContext } from "features/context/FirebaseContext";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { likePerson } from "../functions";
import { useLiked, useLikedPerson } from "../hooks";

interface Props {
  name: string;
}

export const LikePerson = ({ name }: Props) => {
  // Route Parameters and Context
  const { id } = useParams();
  const { db, userInfo } = useFirebaseContext();
  // Like functionality
  const [likeButtonClicked, setlikeButtonClicked] = useState(false);
  const liked = useLikedPerson(likeButtonClicked);

  return (
    <>
      {userInfo && id && (
        <div className="likeAndRate">
          <div className="likeAndRateWidth">
            <button
              className={liked ? "unlike" : "like"}
              onClick={() => {
                likePerson(db, id, userInfo.uid, name, liked);
                setlikeButtonClicked(!likeButtonClicked);
              }}
            >
              {liked ? "Unlike" : "Like"}
            </button>
          </div>
        </div>
      )}
    </>
  );
};
