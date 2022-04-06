/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */

// Logica para mock de firebase.

// CAsos de validacion de verificacion de correo.
const userNotVerified = {
  user: { emailVerified: false },
};

const userVerified = {
  user: { emailVerified: true },
};

// Caso de error de autenticacion.
const errorObj = {
  code: 0,
  message: 'Failed',
};
export const initializeApp = () => ({});
export const getAnalytics = () => ({});
export const getFirestore = () => ({});
// Export de signInEmail
export const updateProfile = jest.fn(() => Promise.resolve({}));
export const getAuth = () => ({});
export const sendEmailVerification = jest.fn(() => Promise.resolve({}));
export const auth = jest.fn().mockReturnThis();

// Mock de autenticacion de creacion de usuario.
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
    if (email === 'augusto@ejemplo.com') { // si el correo es el correcto
      resolve(userVerified); // Resuelve el usuario
    } else if (email === 'joel@ejemplo.com') { // si el correo no es el correcto
      resolve(userNotVerified); // caso de usuario no verificado
    } else {
      reject(errorObj); // caso de error
    }
  }),
);

// Mock de credencial de google
export class GoogleAuthProvider {
  static credentialFromResult() {
    return { accessToken: 'token' };
  }

  static credentialFromError() {
    return { };
  }
}

const accessToken = 'token';
export const signInWithPopup = jest.fn(
  (auth, provider) => new Promise((resolve, reject) => {
    if (accessToken !== 'token') {
      reject(errorObj);
    } else {
      resolve(userVerified);
    }
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
