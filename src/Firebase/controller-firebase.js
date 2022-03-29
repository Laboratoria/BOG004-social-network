import {
    initializeApp, 
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
} from "./firebase-import.js";

export const createUser = (email, password) => {
    const auth = getAuth();
    return createUserWithEmailAndPassword(auth, email, password);
};