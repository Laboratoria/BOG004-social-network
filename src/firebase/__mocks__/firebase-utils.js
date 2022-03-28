export const getAuth = () => Promise.resolve({});
export const createUserWithEmailAndPassword = (_, email) => new Promise(
  (resolve, reject) => {
    if (email === 'juanchito@gmail.com') {
      reject(new Error('usuario existente'));
    } else {
      resolve({});
    }
  },
);
export const signInWithEmailAndPassword = (_, email, password) => new Promise(
  (resolve, reject) => {
    if (email === 'ferchito@gmail.com' && password === 'miPasswordSeguro') {
      resolve({});
    } else {
      reject(new Error('Error en email o password'));
    }
  },
);
export const onAuthStateChanged = () => Promise.resolve({});
export const signInWithPopup = () => Promise.resolve({});
export class GoogleAuthProvider {}

export const signOut = () => Promise.resolve({});
