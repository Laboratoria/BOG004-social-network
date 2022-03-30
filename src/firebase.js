/* eslint-disable quotes */
/* eslint-disable no-undef */
/* eslint-disable no-alert */
/* eslint-disable import/no-unresolved */
// Configuración Firebase
// Import the functions you need from the SDKs you need
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.9/firebase-app.js';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  // onAuthStateChanged,
  signOut,
} from 'https://www.gstatic.com/firebasejs/9.6.9/firebase-auth.js';

import {
  getFirestore,
  collection,
  addDoc,
  onSnapshot,
  deleteDoc,
  doc,
  getDoc,
} from 'https://www.gstatic.com/firebasejs/9.6.9/firebase-firestore.js';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCG_hRKfR3Yt0K4fhWJPb4MraW-r352Pw4",
  authDomain: "socialnet-pets.firebaseapp.com",
  projectId: "socialnet-pets",
  storageBucket: "socialnet-pets.appspot.com",
  messagingSenderId: "823397695328",
  appId: "1:823397695328:web:fd5c2b11acff0e9ad02805",
  // eslint-disable-next-line comma-dangle
  measurementId: "G-Q4E80NR9KH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider(app);
const db = getFirestore(app);

// New user registered
export const signingUp = (nameFirst, nameLast, email, password) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      window.location.hash = '#/timeline';
      alert('user created!');
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;

      alert(errorMessage);
    });
};

// Log in
export const userSignIn = (email, password) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      window.location.hash = '#/timeline';
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;

      alert(errorMessage);
    });
};

// Log in with Google
export const googleLogIn = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
      window.location.hash = '#/timeline';
    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.email;
      const credential = GoogleAuthProvider.credentialFromError(error);
    });
};

// Sign out
export const close = () => {
  signOut(auth).then(() => {
    window.location.hash = '#/';
    alert('Sign out successfully.');
  }).catch((error) => {
    alert('An error happened.');
  });
};

// Saving data -timeline view-
export const savingPost = (postIt) => {
  addDoc(collection(db, "timeline-posts"), { postIt });
};

// Getting data from Firestore -timeline view-
export const onGettingPost = (callback) => onSnapshot(collection(db, "timeline-posts"), callback);

// Deleting post -timeline view-
export const deletePosts = (id) => deleteDoc(doc(db, "timeline-posts", id));

// Editing post -timeline view-
export const getPost = (id) => getDoc(doc(db, "timeline-posts", id));
