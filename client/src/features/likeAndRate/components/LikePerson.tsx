import { useContextAndParams } from "features/utils/ContextAndParams";
import { useState } from "react";
import { likePerson } from "../functions";
import { useLikedPerson } from "../hooks";

interface Props {
  name: string;
}

export const LikePerson = ({ name }: Props) => {
  // Route Parameters and Context
  const {id, db, userInfo} = useContextAndParams();
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
