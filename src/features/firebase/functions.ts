import { doc, DocumentData, DocumentReference, getDoc, setDoc } from "firebase/firestore";
import { Fields } from "./types";

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
