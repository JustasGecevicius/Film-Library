// Hooks
import { useState } from "react";
import { useLiked, useRating } from "features/likeAndRate/hooks";
import { useParams } from "react-router-dom";
import { useFirebaseContext } from "features/context/FirebaseContext";

// Functions
import { like, rate } from "../functions";

// Styles
import "features/likeAndRate/css/likeAndRate.css";

// Types
import { LikeAndRateType } from "features/movies/types";

export const LikeAndRate = ({ title, type }: LikeAndRateType) => {
  //console.log("likeAndRate");
  // Route Parameters and Context
  const { id } = useParams();
  const { db, userInfo } = useFirebaseContext();
  //console.log(id, db, userInfo, "trio");
  // Like functionality
  const [likeButtonClicked, setlikeButtonClicked] = useState(false);
  //console.log(likeButtonClicked, "likeButton");
  const liked = useLiked(likeButtonClicked, type, id, userInfo, db);
  //console.log(liked, "liked");
  // Rate functionality
  const [rateInput, setRateInput] = useState<string | undefined>(undefined);
  //console.log(rateInput, "rateInput");
  const [rateButtonClick, setRateButtonClick] = useState(false);
  //console.log(rateButtonClick, "rateButtonClick");
  const rating = useRating(rateButtonClick, rateInput, type, id, userInfo, db);
  //console.log(rating, "rating");

  return userInfo && id ? (
    <div className="likeAndRate">
      <div className="likeAndRateWidth">
        <button
          className={liked ? "unlike" : "like"}
          onClick={() => {
            like(db, id, userInfo.uid, title, liked, type);
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
            rate(db, id, userInfo.uid, rateInput, type);
            setRateButtonClick(!rateButtonClick);
          }}
        >
          Rate
        </button>
        <div className="movieNumbersSymbol">
          <p className="movieNumberSymbolText">{`Your Rating | ${
            rating ? rating : "none"
          }`}</p>
        </div>
      </div>
    </div>
  ) : (
    <div className="placeholder"></div>
  );
};
