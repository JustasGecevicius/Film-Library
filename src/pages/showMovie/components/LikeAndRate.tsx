/* eslint-disable react-hooks/exhaustive-deps */

// Functions
import { useContext, useEffect, useState } from "react";

// Styles
import "../../../css/likeAndRate.css";

// Types
import { LikeAndRateType } from "features/movies/types";
import { fetchLiked, fetchRating, like, rate } from "features/movies/functions";
import { FirebaseContext } from "features/context/FirebaseContext";


// Get the uid and title of the movie as props
export const LikeAndRate = ({ movieId, title }: LikeAndRateType) => {
    // Gets the user data to later update it and the firestore app
    // FIND A WAY TO FIX THE ANY TYPE!!!!!!
    const {db, userInfo} = useContext<any>(FirebaseContext);

    // State for if the movie is liked or not
    const [liked, setLiked] = useState(false);
    const [ rating, setRating ] = useState("X");

    // Fetches all the liked movies when the user information is received from context
    useEffect(() => {
        // If information found start the fetch
        if (userInfo && Object.keys(userInfo).length !== 0) {
            fetchLiked(db, userInfo["uid"], movieId, setLiked);
            fetchRating(db, userInfo["uid"], movieId, setRating);
        }
    }, [userInfo]);

    const handleSubmit = (e : React.FormEvent) => {
        e.preventDefault();
        if(userInfo["uid"]){
            rate(db, movieId, userInfo["uid"], e["target"], setRating);
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
                <form className="rateForm" onSubmit={(e : React.FormEvent) => {
                    handleSubmit(e);
                }}>
                    <input
                        className="rateInput"
                        type="number"
                        max="10"
                        min="0"
                    ></input>
                <button className="rateButton" type="submit">
                        Rate
                </button>
                </form>
                <div className="movieNumbersSymbol">
                    <p className="movieNumberSymbolText">{`Your Rating | ${rating}`}</p>
                </div>
            </div>
        </div>
    ) : null;
};
