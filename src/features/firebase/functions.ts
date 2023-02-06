import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import {
  doc,
  DocumentData,
  DocumentReference,
  Firestore,
  getDoc,
  setDoc,
} from "firebase/firestore";

export async function initializeUser(
  db: Firestore,
  userId: string | undefined,
  userName: string | null,
  userURL: string | null
) {
  // Gets a list of all the different fields in Firebase
  const docRef: DocumentReference<DocumentData> = doc(
    db,
    "fieldsList",
    "Fields"
  );
  const document = await getDoc(docRef);
  const allfields = document.data();

  if (!allfields) return;
  // Checks if the field exists already ie the user isn't new and if not then creates all the neccesary fields
  allfields["fields"].forEach(async (elem : string) => {
    if(elem !== "userNames"){
      const fieldRef: DocumentReference<DocumentData> = doc(
        db,
        `${elem}`,
        `${userId}`
      );
      const field = await getDoc(fieldRef);
      if (!field.exists()) {
        setDoc(doc(db, `${elem}`, `${userId}`), {});
      }
    }
    if(elem === "userNames"){
      const fieldRef: DocumentReference<DocumentData> = doc(
        db,
        `${elem}`,
        `${userName}`
      );
      const field = await getDoc(fieldRef);
      if (!field.exists()) {
        setDoc(doc(db, `${elem}`, `${userName}`), {id : userId, URL: userURL});
      }
    }

  });
}

// Sign in Firebase using popup auth and Google as the identity provider.
export async function signInUser() {
  var provider = new GoogleAuthProvider();
  await signInWithPopup(getAuth(), provider);
}

// Sign out of Firebase.
export function signOutUser() {
  signOut(getAuth());
}
