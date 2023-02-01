import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { doc, DocumentData, DocumentReference, Firestore, getDoc, setDoc } from "firebase/firestore";
import { Fields } from "./types";

export async function initializeUser(userId: string | undefined, db: Firestore) {
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
export async function signInUser() {
  // Sign in Firebase using popup auth and Google as the identity provider.
  var provider = new GoogleAuthProvider();
  await signInWithPopup(getAuth(), provider);
}

export function signOutUser() {
  // Sign out of Firebase.
  signOut(getAuth());
}
