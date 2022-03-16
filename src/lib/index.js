// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.8/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/9.6.8/firebase-firestore.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/9.6.8/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDOPnedni_lGkXKH8QvH6JV1iTbcAwmJm4",
  authDomain: "social-network-ac42d.firebaseapp.com",
  projectId: "social-network-ac42d",
  storageBucket: "social-network-ac42d.appspot.com",
  messagingSenderId: "301187927033",
  appId: "1:301187927033:web:6bf303b353329946510b28"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();
const dataBase = getDatabase(app);

export const saveTask = (title, description) =>
  addDoc(collection(db, 'tasks'), { title, description })
