/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
const userNotVerified = {
  user: { emailVerified: false },
};

const userVerified = {
  user: { emailVerified: true },
};

const errorObj = {
  code: 0,
  message: 'Failed',
  // email: 'pepe@email.com',
  // credential: GoogleAuthProvider.credentialFromError('error'),
};
export const initializeApp = () => ({});
export const getAnalytics = () => ({});
export const getFirestore = () => ({});
// Export de signInEmail
export const updateProfile = jest.fn(() => Promise.resolve({}));
export const getAuth = () => ({});
export const sendEmailVerification = jest.fn(() => Promise.resolve({}));
export const auth = jest.fn().mockReturnThis();
export const createUserWithEmailAndPassword = jest.fn(
  (auth, email, password) => new Promise((resolve, reject) => {
    if (email === 'pepe@pepe.com') {
      resolve(userVerified);
    } else {
      reject(errorObj);
    }
  }),
);
// Export de logInEmail
export const signInWithEmailAndPassword = jest.fn(
  (auth, email, password) => new Promise((resolve, reject) => {
    if (email === 'augusto@ejemplo.com') {
      resolve(userVerified);
    } else if (email === 'joel@ejemplo.com') {
      resolve(userNotVerified);
    } else {
      reject(errorObj);
    }
  }),
);

export class GoogleAuthProvider {
  static credentialFromResult() {
    return { accessToken: '' };
  }

  static credentialFromError() {
    return { };
  }
}

export const signInWithPopup = jest.fn(
  (auth, provider) => new Promise((resolve) => {
    resolve();
  }),
);

// /* mocks de firestore*/
export const collection = () => ({});
export const addDoc = () => ({});
export const getDoc = () => ({});
export const deleteDoc = () => ({});
export const updateDoc = () => ({});
export const onSnapshot = () => ({});
export const doc = jest.fn(() => Promise.resolve({}));
export const query = () => ({});
export const orderBy = () => ({});
export const serverTimestamp = () => ({});
