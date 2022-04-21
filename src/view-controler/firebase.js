// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";

import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  onSnapshot,
  doc,
  getDoc,
  updateDoc
} from "https://www.gstatic.com/firebasejs/9.6.10/firebase-firestore.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC3gewOVuXAJvEBvpW0r5QBNP_-DzuyQK8",
  authDomain: "hi-baby-1c543.firebaseapp.com",
  projectId: "hi-baby-1c543",
  storageBucket: "hi-baby-1c543.appspot.com",
  messagingSenderId: "711902113196",
  appId: "1:711902113196:web:a8146fec397ce386e75e09",
  measurementId: "G-X5JHPEPQNZ",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const auth = getAuth();

export const provider = new GoogleAuthProvider();

export const loginWithFirebase = (email, password) => {
  return  signInWithEmailAndPassword(auth, email, password)
}

const db = getFirestore();


export const saveTask = (title, description,likes) =>{
console.log({ title, description,likes });
  addDoc(collection(db, "tasks"), { title, description,likes});
}
export const getTasks = () => getDocs(collection(db, "tasks"));

export const onGetTasks = (callback) =>
  onSnapshot(collection(db, "tasks"), callback);

export const deleteTask = (id) => deleteDoc(doc(db, "tasks", id));

export const getTask = (id) => getDoc(doc(db, "tasks", id));

export const updateTask = (id,newFields) =>updateDoc(doc(db,"tasks", id),newFields);

export {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
};
