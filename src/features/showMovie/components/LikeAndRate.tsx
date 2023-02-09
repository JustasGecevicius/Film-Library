// Hooks
import { useState } from "react";
import { useLiked, useRating } from "features/likeAndRate/hooks";
import { useParams } from "react-router-dom";
import { useFirebaseContext } from "features/context/FirebaseContext";

// Functions
import { like, rate } from "features/movies/functions";

// Styles
import "../../../css/likeAndRate.css";

// Types
import { LikeAndRateType } from "features/movies/types";


export const LikeAndRate = ({ title }: LikeAndRateType) => {
  const { movieId } = useParams();
  const { db, userInfo } = useFirebaseContext();
  // Like functionality
  const [likeButtonClicked, setlikeButtonClicked] = useState<boolean>(false);
  const liked = useLiked(likeButtonClicked);
  // Rate functionality
  const [rateInput, setRateInput] = useState<string>();
  const [rateButtonClick, setRateButtonClick] = useState<boolean>();
  const rating = useRating(rateButtonClick, rateInput);

  return userInfo && movieId ? (
    <div className="likeAndRate">
      <div className="likeAndRateWidth">
        <button
          className={liked ? "unlike" : "like"}
          onClick={() => {
            like(db, movieId, userInfo["uid"], title, liked);
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
          min="0"
          onChange={(e) => setRateInput(e.target.value)}
        />
        <button
          className="rateButton"
          onClick={() => {
            rate(db, movieId, userInfo.uid, rateInput);
            setRateButtonClick(!rateButtonClick);
          }}
        >
          Rate
        </button>
        <div className="movieNumbersSymbol">
          <p className="movieNumberSymbolText">{`Your Rating | ${rating}`}</p>
        </div>
      </div>
    </div>
  ) : null;
};
