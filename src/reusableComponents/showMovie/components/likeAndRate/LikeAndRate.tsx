/* eslint-disable react-hooks/exhaustive-deps */

//functions
import { useContext, useEffect, useState } from "react";
import { DB, UserContext } from "services/userContext";
import { fetchLiked, like } from "./api";

//styles
import "../../../../css/likeAndRate.css";

//types
import { Props } from "./types";


//get the id and title of the movie as props
export const LikeAndRate = ({ id, title }: Props) => {
    //gets the user data to later update it and the firestore app
    const { signInInfo } = useContext<any>(UserContext);
    const { db } = useContext<any>(DB);

    //state for if the movie is liked or not
    const [liked, setLiked] = useState(false);

    //fetches all the liked movies when the user information is received from context
    useEffect(() => {
        //if information found start the fetch
        if (Object.keys(signInInfo).length !== 0) {
            fetchLiked(db, signInInfo, id, setLiked);
        }
    }, [signInInfo]);

    return signInInfo["id"] ? (
        <div className="likeAndRate">
            <div className="likeAndRateWidth">
                <button
                    className={liked ? "unlike" : "like"}
                    onClick={() => {
                        like(id, signInInfo["id"], db, title, setLiked, liked);
                    }}
                >
                    Like
                </button>
                <form className="rateForm">
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
            </div>
        </div>
    ) : null;
};
