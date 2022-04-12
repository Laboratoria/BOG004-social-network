import {
    initializeApp,
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    GoogleAuthProvider, 
    signInWithPopup,
    onAuthStateChanged,
} from "./firebase-import.js";

export const createUser = (email, password) => {
    const auth = getAuth();
    return createUserWithEmailAndPassword(auth, email, password);
};

export const goLoginUser = (email, password) => {
    const auth = getAuth();
    return signInWithEmailAndPassword(auth, email, password);
};

export const loginGoogle = () =>{
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
};


