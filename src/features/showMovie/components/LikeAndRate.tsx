// Functions
import { useEffect, useState } from "react";

// Styles
import "../../../css/likeAndRate.css";

// Types
import { LikeAndRateType } from "features/movies/types";
import { fetchLiked, fetchRating, like, rate } from "features/movies/functions";
import { useFirebaseContext } from "features/context/FirebaseContext";


// Get the uid and title of the movie as props
export const LikeAndRate = ({ movieId, title }: LikeAndRateType) => {
    // Gets the user data to later update it and the firestore app
    const {db, userInfo} = useFirebaseContext();

    // State for if the movie is liked or not
    const [liked, setLiked] = useState(false);
    const [ rating, setRating ] = useState("rateInput");
    const [rateInput, setRateInput] = useState<string>();

    // Fetches all the liked movies when the user information is received from context
    useEffect(() => {
        // If information found start the fetch
        if (userInfo && Object.keys(userInfo).length !== 0) {
            fetchLiked(db, userInfo["uid"], movieId, setLiked);
            fetchRating(db, userInfo["uid"], movieId, setRating);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [userInfo]);

    const handleSubmit = async () => {
        if (!rateInput || !userInfo?.uid) return;
        try {
            await rate(db, movieId, userInfo.uid, rateInput);
            setRating(rateInput);
        }catch {
            console.error("Rating Error");
          }
    }

    return userInfo ? (
        <div className="likeAndRate">
          <div className="likeAndRateWidth">
            <button
              className={liked ? "unlike" : "like"}
              onClick={() => {
                like(db, movieId, userInfo["uid"], title, liked, setLiked);
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
            <button className="rateButton" onClick={handleSubmit}>
              Rate
            </button>
            <div className="movieNumbersSymbol">
              <p className="movieNumberSymbolText">{`Your Rating | ${rating}`}</p>
            </div>
            </div>
    </div>
  ) : null;
};
