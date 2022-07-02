// export const initializeApp = () => Promise.resolve({});
export const getAuth = () => Promise.resolve({});
export const createUserWithEmailAndPassword = jest.fn(
  (auth, email, password) => new Promise((resolve, reject) => {
    if (!email('fulanitogmail.com') && !password('unaContraseña')) {
      resolve(window.location.assign('#login'));
    } else {
      reject(console.log('errorrrr!'));
    }
  }),
);
// export const GoogleAuthProvider = () => Promise.resolve({});
// export const signInWithPopup = () => Promise.resolve({});
// export const signOut = () => Promise.resolve({});
// export const onAuthStateChanged = () => Promise.resolve({});
 