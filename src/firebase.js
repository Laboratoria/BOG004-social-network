  // Configuración Firebase
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.9/firebase-app.js";
  import {  
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup,
    signInWithRedirect,
    getRedirectResult,
    onAuthStateChanged,
    signOut
  } from "https://www.gstatic.com/firebasejs/9.6.9/firebase-auth.js";

  import { 
    getFirestore,
    collection,
    addDoc,
    getDocs
  } from "https://www.gstatic.com/firebasejs/9.6.9/firebase-firestore.js";

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
    measurementId: "G-Q4E80NR9KH"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider(app);
  const db = getFirestore(app);

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
      alert("Username or password invalid");
    });
  };

  //Log in with Google
  export const googleLogIn = () => {
    signInWithPopup(auth, provider)
    getRedirectResult(auth)
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
  }

  //New user registered
  export const signingUp = (nameFirst, nameLast, email, password) => {
    createUserWithEmailAndPassword(auth, email, password, nameFirst, nameLast)
    .then((userCredential) => {
  
      const user = userCredential.user;
      window.location.hash = '#/timeline';
      alert("Your account has been successfully created");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert("There has been an error");
    });
  }


  //Sign out
  export const close = () => {
    signOut(auth).then(() => {
        window.location.hash = '#/';
        alert ("Sign-out successfully.");
      }).catch((error) => {
        alert ("An error happened.");
      });
  }
