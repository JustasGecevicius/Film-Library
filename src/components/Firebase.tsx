import { initializeApp } from 'firebase/app'
import { getFirestore, setDoc, doc } from 'firebase/firestore'
import { getAuth, onAuthStateChanged, User } from 'firebase/auth'

import { DBContext } from 'context/DBContext'
import { useUserContext } from 'context/UserContext'
import { firebaseConfig } from 'config'

type Props = {
  children: React.ReactNode
}

export const Firebase = ({ children }: Props) => {
  const app = initializeApp(firebaseConfig)
  const db = getFirestore(app)

  const { setSignInInfo } = useUserContext()

  const initFirebaseAuth = () => {
    // Listen to auth state changes.
    onAuthStateChanged(getAuth(), authStateObserver)
  }

  const authStateObserver = (user: User | null) => {
    if (user) {
      const { displayName, photoURL, uid, email } = user

      const userInfo = {
        name: displayName,
        photoURL,
        id: uid,
        email,
      }

      setDoc(doc(db, `users/${uid}`), userInfo)

      setSignInInfo(userInfo)
    } else {
      setSignInInfo(undefined)
    }
  }

  return <DBContext.Provider value={{ db }}>{children}</DBContext.Provider>
}
