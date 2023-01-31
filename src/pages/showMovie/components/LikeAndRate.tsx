/* eslint-disable react-hooks/exhaustive-deps */

//functions
import { useContext, useEffect, useState } from "react";
import { DB, UserContext } from "features/services/userContext";

//styles
import "../../../css/likeAndRate.css";

//types
import { LikeAndRateType } from "features/movies/types";
import { fetchLiked, fetchRating, like, rate } from "features/movies/functions";

//get the id and title of the movie as props
export const LikeAndRate = ({ movieId, title }: LikeAndRateType) => {
    //gets the user data to later update it and the firestore app
    const { signInInfo } = useContext<any>(UserContext);
    const { db } = useContext<any>(DB);

    //state for if the movie is liked or not
    const [liked, setLiked] = useState(false);
    const [ rating, setRating ] = useState("X");

    //fetches all the liked movies when the user information is received from context
    useEffect(() => {
        //if information found start the fetch
        if (Object.keys(signInInfo).length !== 0) {
            fetchLiked(db, signInInfo["id"], movieId, setLiked);
            fetchRating(db, signInInfo["id"], movieId, setRating);
        }
    }, [signInInfo]);

    const handleSubmit = (e : React.FormEvent) => {
        e.preventDefault();
        rate(db, movieId, signInInfo["id"], e["target"], setRating);
    }

    useEffect (() => {console.log(liked)},[liked]);

    return signInInfo["id"] ? (
        <div className="likeAndRate">
            <div className="likeAndRateWidth">
                <button
                    className={liked ? "unlike" : "like"}
                    onClick={() => {
                        like(db, movieId, signInInfo["id"], title, setLiked, liked);
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
