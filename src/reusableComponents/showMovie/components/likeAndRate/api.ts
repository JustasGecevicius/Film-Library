import { Like } from "./types"
import { initializeApp } from "firebase/app"
import { DocumentData, DocumentReference, Firestore, getDoc, getFirestore } from "firebase/firestore"
import firebaseConfig from "services/config"
import { doc, updateDoc } from "firebase/firestore"


export const like = async (id : string, userId : string, db: any, title: string, setLiked :any) => {

        setLiked(true);
        //console.log(userId, "userId");
        const movieRef = doc(db, "likedMovies", `${userId}`);
        //console.log(movieRef, "movieRef");
        await updateDoc(movieRef, {[id] : title})

}