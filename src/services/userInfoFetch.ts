import { initializeApp } from "firebase/app";
import {
    collection,
    doc,
    getDocs,
    getFirestore,
    setDoc,
} from "firebase/firestore";
import config from "services/config";

const userInfoFetch = async () => {
        let users = {};
    const app = initializeApp(config);
    const db = getFirestore(app);

    const querySnapshot = await getDocs(collection(db, "nicknames"));
    querySnapshot.forEach((doc) => {
        const docID = doc["id"];
        console.log(doc, docID);
        users = {...users, [doc["id"]]:{...doc.data()}};
    });
    return users;
};

export { userInfoFetch };
