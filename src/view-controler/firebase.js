
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
 import {getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";
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
    measurementId: "G-X5JHPEPQNZ"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  
  //crear una función

  function authenticate (email, password){
  console.log(email, password)
const auth = getAuth();
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
  }

  export {authenticate};