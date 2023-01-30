import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { doc, DocumentData, DocumentReference, getDoc, setDoc } from "firebase/firestore";
import { Fields, UserObject } from "./types";

export async function signInUser() {
        // Sign in Firebase using popup auth and Google as the identity provider.
        var provider = new GoogleAuthProvider();
        await signInWithPopup(getAuth(), provider);
    }
    
    export function signOutUser() {
        // Sign out of Firebase.
        signOut(getAuth());
    }
    export function getProfilePicUrl() {
        let auth = getAuth();
        if (auth.currentUser?.photoURL != null) {
            return auth.currentUser.photoURL || "";
        }
    }
    export function getUserName() {
        const user = getAuth();
        if (user.currentUser?.displayName != null) {
            return user.currentUser.displayName;
        }
    }
    
    export const userData = (user: any) => {
        const userObject: UserObject = {
            name: "",
            photoURL: "",
            id: "",
            email: "",
        };
        userObject["name"] = getUserName();
        userObject["photoURL"] = getProfilePicUrl();
        userObject["id"] = user.uid;
        userObject["email"] = user.email;
        return userObject;
    };
    
    export async function initializeUser(userId: string | undefined, db: any) {
        const docRef: DocumentReference<DocumentData> = doc(db, "fieldsList", "Fields");
        const document = await getDoc(docRef);
        const allfields: DocumentData | undefined = document.data();
    
        if(!allfields) return;
    
        allfields["fields"].forEach(async (elem : Fields) => {
            const fieldRef:DocumentReference<DocumentData> = doc(db, `${elem}`, `${userId}`);
            const field = await getDoc(fieldRef);
            if (!field.exists()) {
                setDoc(doc(db, `${elem}`, `${userId}`), {});
            }
        });
    }