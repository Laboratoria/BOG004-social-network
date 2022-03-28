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

// export const signInWithPopup = jest.fn((auth, provider) => new Promise((resolve, reject) => {
//   if (provider.providerId === 'google.com') {
//     resolve(userVerified);
//   } else {
//     reject(errorObj);
//   }
// }));

// export const GoogleAuthProvider = jest.fn(() => ({}));
