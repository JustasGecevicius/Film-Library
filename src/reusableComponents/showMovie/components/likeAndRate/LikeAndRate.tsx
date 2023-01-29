import React, { useContext, useEffect, useState } from "react";
import { DB, UserContext } from "services/userContext";
import { like } from "./api";
import { initializeApp } from "firebase/app";
import {
    doc,
    DocumentData,
    DocumentReference,
    getDoc,
    getFirestore,
} from "firebase/firestore";
import firebaseConfig from "services/config";
import { likedCheck } from "./likedCheck";


interface Props {
    id: string;
    title: string;
}

export const LikeAndRate = ({ id, title }: Props) => {
    const { signInInfo } = useContext<any>(UserContext);
    const [liked, setLiked] = useState(false);


    const { db } = useContext<any>(DB);

    useEffect(() => {
        const fetch = async () => {
                const docRef: DocumentReference<DocumentData> = doc(
                    db,
                    "likedMovies",
                    `${signInInfo["id"]}`
                );
                const document = await getDoc(docRef);
                const allFields: DocumentData | undefined = document.data();
                console.log(allFields);
                likedCheck(allFields, id);
        };
        if (Object.keys(signInInfo).length !== 0) {
                fetch();
        }
    }, [signInInfo]);

    return signInInfo["id"] ? (
        <div
            className="likeAndRate"
            onClick={() => {
                like(id, signInInfo["id"], db, title, setLiked);
            }}
        >
            <div className="likeAndRateWidth">
                <button className="like">Like</button>
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
