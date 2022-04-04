/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable import/no-unresolved */
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendEmailVerification,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  getFirestore,
  collection,
  addDoc,
  getDocs,
  onSnapshot,
  deleteDoc,
  doc,
  getDoc,
  updateDoc,
  getDatabase,
  initializeApp,
  arrayUnion,
  arrayRemove,
  onAuthStateChanged,
} from './firebase-imports.js';

const firebaseConfig = {
  apiKey: 'AIzaSyDOPnedni_lGkXKH8QvH6JV1iTbcAwmJm4',
  authDomain: 'social-network-ac42d.firebaseapp.com',
  projectId: 'social-network-ac42d',
  storageBucket: 'social-network-ac42d.appspot.com',
  messagingSenderId: '301187927033',
  appId: '1:301187927033:web:6bf303b353329946510b28',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore();
const dataBase = getDatabase(app);
export const auth = getAuth();
const provider = new GoogleAuthProvider();

/*export const observer = onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    console.log(user);
    const uid = user.uid;
    //return user;
    // ...
  } else {
    console.log('No hay nadie conectado');
    // return false;
    // User is signed out
    // ...
  }
});*/

export const SignUpUser = (email, password) => createUserWithEmailAndPassword(auth, email, password)
  .then(
    (userCredential) => {
      sendEmailVerification(auth.currentUser).then(() => {
        const user = userCredential.user;
        console.log(auth.currentUser);
        // eslint-disable-next-line no-alert
        alert(`Se ha enviado un correo de verificación a${email}`);
      });
    },
  );

export const SignInUser = (email, password) => signInWithEmailAndPassword(auth, email, password);
export const googleSignWithPopup = () => signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // ...
  })
  .catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });

export const userSignOut = () => signOut(auth).then(() => {
  console.log('SIGN OUT !');
}).catch((_error) => {
  console.log('ERROR !');
});

export const saveComment = async (comment) => {
  const date = new Date();
  const email = auth.currentUser.photoURL;
  const userId = auth.currentUser.uid;
  const likesCounter = 0;
  await addDoc(collection(db, 'comments'), {
    comment, date, email, userId, likesCounter,
  });
};

export const onGetComments = (callback) => onSnapshot(collection(db, 'comments'), callback);
export const deleteComment = (id) => deleteDoc(doc(db, 'comments', id));
export const getComment = (id) => getDoc(doc(db, 'comments', id));
export const updateComment = (id, newFileds) => updateDoc(doc(db, 'comments', id), newFileds);

export const updateLikeBtn = async (id, userLike) => {
  // console.log('recibe id y uid: ', id, userLike);
  const getPost = await getComment(id);
  // console.log('getPost: ', getPost.data());
  // console.log('getPost likescounter: ', getPost.data().likesCounter);
  const likesCount = getPost.data().likesCounter;

  if ((userLike === getPost.data().userId) && likesCount === 0) {
    console.log('es 0');
    updateComment(id, { likesCounter: likesCount + 1 });
  }

  if ((userLike === getPost.data().userId) && likesCount === 1) {
    // likesCount ++
    updateComment(id, { likesCounter: likesCount - 1 });
  }
};
