// Importamos app para inicializar firebase
import { app, db } from './fbKeys.js';
import {
  query,
  addDoc,
  collection,
  getDocs,
  updateDoc,
  doc,
  GoogleAuthProvider,
  deleteDoc,
  arrayUnion,
  arrayRemove,
} from './firebaseImport.js';
import {
  createUser,
  provider,
  signIn,
  signInWithGoogle,
  signOutFunction,
} from '../view-controler/controllers.js';
import {
  changeView,
} from '../view-controler/route.js';
import {
  paintPost,
  showsPaintPost,
} from '../views/ecoTraveler.js';

// const userEmail
/* Creamos una funcion createUser para exportarla y activarla
cuando se de click a el boton de registrarte y le pasamos como parametro email y contraseña */
export const createNewUser = (email, password) => {
  createUser(email, password)
    .then((userCredential) => {
    // Signed in
      /* const user = userCredential.user; */
      changeView('#/ecoTraveler');
      showsPaintPost();
    // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = document.querySelector('#errorMessage');
      switch (errorCode) {
        case 'auth/email-already-in-use':
          errorMessage.innerHTML = 'Correo registrado, ingresa uno nuevo';
          break;
        case 'auth/invalid-email':
          errorMessage.innerHTML = 'Correo inválido';
          break;
        case 'auth/weak-password':
          errorMessage.innerHTML = 'La contraseña debe contener mínimo 6 caracteres';
          break;
        default:
          break;
      }
    // ..
    });
};

export const signInUser = (auth, email, password) => {
  signIn(auth, email, password)
    .then((userCredential) => {
    // Signed in
      const user = userCredential.user;
      // ...
      changeView('#/ecoTraveler');
      showsPaintPost();
      /* console.log("Hola, soy auth", user.uid); */
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = document.querySelector('#errorMessage');
      switch (errorCode) {
        case 'auth/invalid-email':
          errorMessage.innerHTML = 'Correo inválido';
          break;
        case 'auth/user-not-found':
          errorMessage.innerHTML = 'El usuario no está registrado';
          break;
        case 'auth/wrong-password':
          errorMessage.innerHTML = 'Contraseña incorrecta';
          break;
        default:
          break;
      }
    });
};
// const auth = getAuth();
export const loginGoogle = (auth, provider) => {
  signInWithGoogle(authprovider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      changeView('#/ecoTraveler');
      showsPaintPost();
      // ...
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
};

export const savePost = (post, userName, date) => addDoc(collection(db, 'posts'), {
  post, userName, date, like: [],
});

export const showsPost = async () => {
  const querySnapshot = await getDocs(collection(db, 'posts'));
  return querySnapshot;
};

export const onSnapshotFunction = () => {
  const q = query(collection(db, 'posts'));
  return q;
};

export const editPost = (id, postUpdate) => updateDoc(doc(db, 'posts', id), { post: postUpdate });

export const deletePost = async (id, posts) => await deleteDoc(doc(db, 'posts', id));

export const like = (idPost, idUser, isLike) => {
  if (!isLike) {
    return updateDoc(doc(db, 'posts', idPost), { like: arrayUnion(idUser) });
  } else {
    return updateDoc(doc(db, 'posts', idPost), { like: arrayRemove(idUser) });
  }
};

export const signOut = (auth) => {
  signOutFunction(auth)
    .then(() => {
      changeView('#/register');
    });
};
