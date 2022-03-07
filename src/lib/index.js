
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.8/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/9.6.8/firebase-firestore.js";
import {getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.8/firebase-auth.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/9.6.8/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQVpt9CuLQRwiw5BRMmd5Ylu-jYda4RX0",
  authDomain: "papyrus-cdaa8.firebaseapp.com",
  databaseURL: "https://papyrus-cdaa8-default-rtdb.firebaseio.com",
  projectId: "papyrus-cdaa8",
  storageBucket: "papyrus-cdaa8.appspot.com",
  messagingSenderId: "771598807546",
  appId: "1:771598807546:web:0cab50d233b33f39e67443",
  measurementId: "G-QPDSNQS35L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();
const dataBase = getDatabase(app);

export const saveLogin = (nickname, email, password) => 
  addDoc(collection(db, 'logins'), {nickname,email,password})

      const login = document.getElementById('login');
      login.addEventListener('submit', (e) => {
        e.preventDefault()

        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      alert('user created!')
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;

      alert(errorMessage)
      // ..
    });
})

