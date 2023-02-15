// Hooks
import { useState } from "react";
import { useLiked, useRating } from "features/likeAndRate/hooks";
import { useParams } from "react-router-dom";
import { useFirebaseContext } from "features/context/FirebaseContext";

// Functions


// Styles
import "../../../css/likeAndRate.css";

// Types
import { LikeAndRateType } from "features/movies/types";
import { like, rate } from "../functions";


export const LikeAndRate = ({ title, type }: LikeAndRateType) => {
  const { id } = useParams();
  const { db, userInfo } = useFirebaseContext();
  // Like functionality
  const [likeButtonClicked, setlikeButtonClicked] = useState(false);
  const liked = useLiked(likeButtonClicked, type);
  // Rate functionality
  const [rateInput, setRateInput] = useState<string | undefined>(undefined);
  const [rateButtonClick, setRateButtonClick] = useState(false);
  const rating = useRating(rateButtonClick, rateInput, type);

  return userInfo && id ? (
    <div className="likeAndRate">
      <div className="likeAndRateWidth">
        <button
          className={liked ? "unlike" : "like"}
          onClick={() => {
            like(db, id, userInfo["uid"], title, liked);
            setlikeButtonClicked(!likeButtonClicked);
          }}
        >
          {liked ? "Unlike" : "Like"}
        </button>
        <input
          name="rateInput"
          className="rateInput"
          type="number"
          max="10"
          min="1"
          onChange={(e) => setRateInput(e.target.value)}
        />
        <button
          className="rateButton"
          onClick={() => {
            rate(db, id, userInfo.uid, rateInput);
            setRateButtonClick(!rateButtonClick);
          }}
        >
          Rate
        </button>
        <div className="movieNumbersSymbol">
          <p className="movieNumberSymbolText">{`Your Rating | ${rating ? rating : "none"}`}</p>
        </div>
      </div>
    </div>
  ) : <div className="suckAss"></div>;
};
