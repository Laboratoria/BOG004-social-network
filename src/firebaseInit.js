
    import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.8/firebase-app.js'
    import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.8/firebase-auth.js";
  // import { getAuth, onAuthStateChanged } from "firebase/auth";
        // Add Firebase products that you want to use
    // import { auth } from 'https://www.gstatic.com/firebasejs/9.6.8/firebase-auth.js'
    // import { firestore } from 'https://www.gstatic.com/firebasejs/9.6.8/firebase-firestore.js'
  
    const firebaseConfig = {
  apiKey: "AIzaSyBrYZ67zhwpOS_Hfqv6FKtfRXFMNp5W7bY",
  authDomain: "thedailyprophet-prueba.firebaseapp.com",
  projectId: "thedailyprophet-prueba",
  storageBucket: "thedailyprophet-prueba.appspot.com",
  messagingSenderId: "861904852247",
  appId: "1:861904852247:web:e43702a3cbba18134a5352"
};
    const app = initializeApp(firebaseConfig);  
console.log (app)

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

  // async function createUserEmailAndPassword(email, password) {
  //   try {
  //     const authentication = await firebase.auth().createUserWithEmailAndPassword(email, password);
  //     return authentication; //   objeto que trae mucas cosas
  //   } catch (error) {
  //     let errorMessage = error.message;
  //     return errorMessage;
  //   }
  // }
  