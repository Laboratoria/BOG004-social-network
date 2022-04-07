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
    if (email === 'verificado') { // si el correo es el correcto
      resolve(userVerified); // Resuelve el usuario
    } else if (email === 'no_verificado') { // si el correo no es el correcto
      resolve(userNotVerified); // caso de usuario no verificado
    } else {
      reject(errorObj); // caso de error
    }
  }),
);

export class GoogleAuthProvider {
  static credentialFromResult() {
    return { accessToken: '' };
  }

  static credentialFromError() {
    return {};
  }
}

export const signInWithPopup = jest.fn(
  (auth, provider) => new Promise((resolve, reject) => {
    sessionStorage.setItem('user', JSON.stringify(userVerified));
    resolve(window.location.hash = '#post');
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
