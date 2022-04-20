import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from '../firebase/firebaseImport.js';

export const auth = getAuth();

export const createUser = (email, password) => createUserWithEmailAndPassword(auth, email, password);

export const signIn = (auth, email, password) => signInWithEmailAndPassword(auth, email, password);

export const provider = new GoogleAuthProvider();

export const signInWithGoogle = (auth, provider) => signInWithPopup(auth, provider);

export const signOutFunction = (auth) => signOut(auth);
