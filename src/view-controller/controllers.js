import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  getFirestore,
  collection,
  addDoc,
  deleteDoc,
  doc,
  getDoc,
  updateDoc,
  onSnapshot,
} from '../FirebaseConfig.js';

export const auth = getAuth();
// const user = auth.userCredential;
// console.log(user);
export const newRegister = (email, password) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log('registrado');
      const user = userCredential.user;
      document.querySelector('#mensaje').innerHTML = 'Usuario registrado exitosamente';
      document.querySelector('#atencion').style.display = 'flex';
    })
    .catch((error) => {
      const errorCode = error.code;
      console.log('erroCode: ', errorCode);
      switch (errorCode) {
        case 'auth/invalid-email':
          document.querySelector('#mensaje').innerHTML = 'Debe ingresar un correo válido';
          document.querySelector('#atencion').style.display = 'flex';
          break;
        case 'auth/email-already-in-use':
          document.querySelector('#mensaje').innerHTML = 'El correo ya está registrado';
          document.querySelector('#atencion').style.display = 'flex';
          break;
        case 'auth/weak-password':
          document.querySelector('#mensaje').innerHTML = 'La contraseña debe tener mínimo 6 caracteres';
          document.querySelector('#atencion').style.display = 'flex';
          break;
        default:
          break;
      }
    });
};

export const newLogin = (email, password) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log('logueado...');
      window.location.assign('#/feed');
      const user = userCredential.user;
      console.log('esto es lo que quiero:', user);
    })
    .catch((error) => {
      const errorCode = error.code;
      console.log(errorCode);
      switch (errorCode) {
        case 'auth/wrong-password':
          document.querySelector('#mensaje').innerHTML = 'Contraseña incorrecta, por favor verifique';
          document.querySelector('#atencion').style.display = 'flex';
          break;
        case 'auth/user-not-found':
          document.querySelector('#mensaje').innerHTML = 'Primero regístrese para poder ingresar';
          document.querySelector('#atencion').style.display = 'flex';
          break;
        case 'auth/invalid-email':
          document.querySelector('#mensaje').innerHTML = 'Debe ingresar un correo válido';
          document.querySelector('#atencion').style.display = 'flex';
          break;
        default:
          break;
      }
    });
};
export const provider = new GoogleAuthProvider();
export const googlePopUp = () => signInWithPopup(auth, provider);

// Acceso a la aplicación logueando con google
export const googleLogin = () => {
  googlePopUp(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      // ...
      window.location.assign('#/feed');
      console.log('logueado con google');
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

// Función para cerrar sesión
export const logOut = () => {
  signOut(auth).then(() => {
  // Sign-out successful.
    window.location.assign('#');
  }).catch((error) => {
  // An error happened.
  });
  console.log('adiós, vuelve pronto');
};

// AQUI EMPEZAMOS A USAR FIRESTORE
// Creamos la base de datos
export const db = getFirestore();
// Creación de la collection
export const dbPost = collection(db, 'Posts');
// Crear el documento donde se alojara el post
export async function crearPost() {
  try {
    const docRef = await addDoc(dbPost, {
      content: document.querySelector('#contentFeed').value,
      user: localStorage.getItem('email'),
      likes: [],
      likesCount: 0,
    });
    console.log('Document written with ID: ', docRef.id);
  } catch (e) {
    console.error('Error adding document: ', e);
  }
}

// función para borrar Post
export const deletePost = (id) => deleteDoc(doc(db, 'Posts', id));
// función para obtener los posts
export const getPost = (id) => getDoc(doc(db, 'Posts', id));
// función para mostrar los Post en tempo real
export const onPost = (querySnapshot) => onSnapshot(dbPost, querySnapshot);
// función para editar Post
export const updatePost = (id, content) => updateDoc(doc(db, 'Posts', id), content);
