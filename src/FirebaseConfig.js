import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.8/firebase-app.js';
import { getAnalytics } from 'https://www.gstatic.com/firebasejs/9.6.8/firebase-analytics.js';
import { getFirestore, collection, getDocs } from 'https://www.gstatic.com/firebasejs/9.6.8/firebase-firestore.js';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged} from 'https://www.gstatic.com/firebasejs/9.6.8/firebase-auth.js';


export {initializeApp, getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged };

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyBWHUz2SSjPIDRByCe41qqMYgh4DBnEIgQ",
  authDomain: "codering-b533c.firebaseapp.com",
  databaseURL: "https://codering-b533c-default-rtdb.firebaseio.com",
  projectId: "codering-b533c",
  storageBucket: "codering-b533c.appspot.com",
  messagingSenderId: "370693461584",
  appId: "1:370693461584:web:8612df7131b6e0b419a355",
  measurementId: "G-PJFBT87KF8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
export const newRegister = (auth, email, password) =>{
  return createUserWithEmailAndPassword(auth, email, password)
};
export const newLogin = ( auth, email, password) =>{
  return signInWithEmailAndPassword(auth, email, password)
};
export const provider = new GoogleAuthProvider();
export const googlePopUp = (auth,provider) => {
  return signInWithPopup(auth, provider)
};

export const googleLogin = () => {
  googlePopUp(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // ...
        window.location.assign('#/feed')
        console.log('logueado con google')
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        console.log(errorCode);
        const errorMessage = error.message;
        console.log(errorMessage);
        // The email of the user's account used.
        const email = error.email;
        console.log(email);
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
};

export const logOut = () => {
  const auth = getAuth();
  signOut(auth).then(() => {
    // Sign-out successful.
    window.location.assign('#')
  }).catch((error) => {
    // An error happened.
  });
  console.log('adiós, vuelve pronto')
};

//aca se empieza a usar Firestore
const db = getFirestore(app);
const setupPosts = data => {
  if (data.length) {
    let html ='';
    data.forEach(doc => {
      const post = doc.data();
      console.log(Post) 
      const contenido = `
        <h3>
      `
    }
    )
  }
  else {}
}
export const reglaUno = () => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
    if (user) {
      db.collection('Posts')
        .get()
        .then((snapshot) => {
          setupPost(snapshot.docs)
        })
      console.log('estado:logueado')
    } else {
      console.log('estado:no logueado')
    }
  });
}