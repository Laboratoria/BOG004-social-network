export const initializeApp = () => Promise.resolve({});
export const getAuth = () => ({ _id: 'get-auth' });
export const createUserWithEmailAndPassword = jest.fn(() => Promise.resolve({}));
export const signInWithEmailAndPassword = () => Promise.resolve({});
// export const onAuthStateChanged = ()
export const getFirestore = () => Promise.resolve({});