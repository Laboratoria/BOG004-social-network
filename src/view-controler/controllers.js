import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from '../Firebase/firebaseImport.js';

export const auth = getAuth();

export const createUser = (email, password) => {
  return createUserWithEmailAndPassword( auth, email, password);
};

export const signIn = (auth, email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
}
