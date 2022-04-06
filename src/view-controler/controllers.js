import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, GoogleAuthProvider,signInWithPopup } from '../Firebase/firebaseImport.js';

export const auth = getAuth();

export const createUser = (email, password) => {
  return createUserWithEmailAndPassword( auth, email, password);
};

export const signIn = (auth, email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
}

export const provider = new GoogleAuthProvider();

export const signInWithGoogle = (auth,provider ) => {
  return signInWithPopup(auth, provider); 
  }