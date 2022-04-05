export const initializeApp = () => Promise.resolve({});
export const getFirestore = () => Promise.resolve({});

export const getAuth = () => ({});
// export const signInWithEmailAndPassword = jest.fn((auth, email, password) => Promise.reject({code:'auth/user-not-found'}));
// export const signInWithEmailAndPassword = () => Promise.resolve({});
export const signInWithPopup = jest.fn((auth, provider) => Promise.resolve({}));
export const signInWithEmailAndPassword = jest.fn(() => Promise.resolve({}));
// eslint-disable-next-line prefer-promise-reject-errors
export const createUserWithEmailAndPassword = jest.fn((auth, email, password) => Promise.reject({code: 'auth/invalid-email'}));
export const signInWithRedirect = () => Promise.resolve({});
export class GoogleAuthProvider { }
export const sendEmailVerification = () => Promise.resolve({});
export const onAuthStateChanged = () => Promise.resolve({});
export const collection = () => Promise.resolve({});
export const getDocs = () => Promise.resolve({});
export const addDoc = () => Promise.resolve({});
// const collection = jest.fn((db, collection) => {
//   return  ;
// });

// // const getDocs = (collection) => { return Promise.resolve(docs, [],);
// export const signInWithEmailAndPassword = jest.fn((auth, email, password) => {
//     const userCredential = {
//         user: { uid: 'ID123456', emailVerified: true },
//     }
//     if ('') {
//         return Promise.resolve({userCredential});
//     } else {
//        return Promise.reject({ code: 'auth/user-not-found' });
//     }
// });