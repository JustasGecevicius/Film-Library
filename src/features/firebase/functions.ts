import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import {
  doc,
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
  const docRef = doc(db, "fieldsList/Fields");
  const document = await getDoc(docRef);
  const allfields = document.data();

  if (!allfields) return;
  // Checks if the field exists already and the user isn't new and if not then creates all the neccesary fields
  allfields.fields.forEach(async (elem: string) => {
    if (elem !== "userNames") {
      const field = await getDoc(doc(
        db,
        `${elem}/${userId}`
      ));
      if (!field.exists()) {
        setDoc(doc(db, `${elem}`, `${userId}`), {});
      }
    }
    else {
        const field = await getDoc(doc(
        db,
        `${elem}/${userName}`
      ));
      if (!field.exists()) {
        setDoc(doc(db, `${elem}`, `${userName}`), { uid: userId, profileURL: userURL });
      }
    }
  });
}

export async function signInUser() {
  var provider = new GoogleAuthProvider();
  await signInWithPopup(getAuth(), provider);
}

export function signOutUser() {
  signOut(getAuth());
}
