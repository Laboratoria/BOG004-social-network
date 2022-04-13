import {
    getAuth,
    createUserWithEmailAndPassword,
    sendEmailVerification,
    signInWithEmailAndPassword,
    onAuthStateChanged,
} from '../Firebase/firebase-import.js';

export const createUser = (email, password) => {
    const auth = getAuth();
    return createUserWithEmailAndPassword(auth, email, password)
        // .then((userCredential) => {
        //     // Signed in
        //     const user = userCredential.user;
        //     sendEmailVerification(auth.currentUser)
        //         .then(() => {
        //             //Email Verification Sent
        //         });
        //     return userCredential
        // });
};

export const logIn = (email, password) => {
    const auth = getAuth();
    return signInWithEmailAndPassword(auth, email, password);
};