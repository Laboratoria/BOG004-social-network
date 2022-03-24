export const getAuth = () => Promise.resolve({});
export const createUserWithEmailAndPassword = (auth, email, password) => new Promise(
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
export const GoogleAuthProvider = () => { Promise.resolve({}); };
