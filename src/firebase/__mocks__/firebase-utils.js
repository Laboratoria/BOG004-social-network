export const getAuth = () => Promise.resolve({});
export const createUserWithEmailAndPassword = (_, email) => new Promise(
  (resolve, reject) => {
    if (email === 'juanchito@gmail.com') {
      reject(new Error('usuario existente'));
    } else {
      resolve();
    }
  },
);
export const signInWithEmailAndPassword = () => Promise.resolve({});
export const onAuthStateChanged = () => Promise.resolve({});
export const signInWithPopup = () => Promise.resolve({});
export class GoogleAuthProvider {}
