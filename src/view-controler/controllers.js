import { getAuth, createUserWithEmailAndPassword } from '../Firebase/firebaseImport.js';

export const createUser = (email, password) => {
  const auth = getAuth();
  return createUserWithEmailAndPassword(auth, email, password);
};
