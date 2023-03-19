// Hooks
import { useRef, useState } from "react";
import { useLiked, useRating } from "features/likeAndRate/hooks";

// Functions
import { like, rate } from "../functions";

// Styles
import "features/likeAndRate/css/likeAndRate.css";

// Types
import { LikeAndRateType } from "features/movies/types";
import { useContextAndParams } from "features/utils/ContextAndParams";

export const LikeAndRate = ({ title, type }: LikeAndRateType) => {
  // Route Parameters and Context
  const {id, db, userInfo} = useContextAndParams();
  // Like functionality
  const [likeButtonClicked, setlikeButtonClicked] = useState(false);
  const liked = useLiked(likeButtonClicked, type, id, userInfo, db);

  // Rate functionality
  const userRating = useRef<number | undefined>(undefined);
  const [rateButtonClick, setRateButtonClick] = useState(false);
  const rating = useRating(rateButtonClick, userRating.current, type, id, userInfo, db);
 
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
          onChange={(e) => userRating.current = +e.target.value}
          placeholder="Rating"
          
        />
        <button
          className="rateButton"
          onClick={() => {
            rate(db, id, userInfo.uid, userRating.current, type);
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
