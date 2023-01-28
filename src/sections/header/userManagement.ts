import {
    getAuth,
    GoogleAuthProvider,
    signInWithPopup,
    signOut,
} from "firebase/auth";

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
