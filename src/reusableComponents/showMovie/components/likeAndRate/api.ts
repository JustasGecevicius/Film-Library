import { deleteField, DocumentData, DocumentReference, getDoc} from "firebase/firestore"
import { doc, updateDoc } from "firebase/firestore"
import { likedCheck } from "./likedCheck"

//the function called when the like button is pressed
export const like = async (id : string, userId : string, db: any, title: string, setLiked :any, liked:boolean) => {
        //gets the movie refference
        const movieRef = doc(db, "likedMovies", `${userId}`)
        //delete or add the movie based on liked state
        if(liked){
                await updateDoc(movieRef, {[id] : deleteField()})
        }
        else{
                await updateDoc(movieRef, {[id] : title});
        }
        //setting the state of liked to the opposite
        setLiked(!liked);
}

export const fetchLiked = async (db : any, signInInfo : any, id : any, setLiked : any) => {
        const docRef: DocumentReference<DocumentData> = doc(
                db,
                "likedMovies",
                `${signInInfo["id"]}`
            );
            const document = await getDoc(docRef);
            const allFields: DocumentData | undefined = document.data();
            //checking if the movie is liked already and setting the liked state
            setLiked(likedCheck(allFields, id));
}

