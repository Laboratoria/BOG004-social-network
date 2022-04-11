import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  getFirestore,
  collection,
  addDoc,
  deleteDoc,
  doc,
  getDoc,
  updateDoc,
  onSnapshot,
  serverTimestamp,
  orderBy,
  query,
  arrayUnion,
  arrayRemove,
} from '../FirebaseConfig.js';

export const auth = getAuth();
// Declaramos una variable vacia, para guardar el email del usuario logueado
let usuarioLogueado = '';

export const newRegister = (email, password) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log('registrado');
      const user = userCredential.user;
      document.querySelector('#mensaje').innerHTML = 'Usuario registrado exitosamente';
      document.querySelector('#atencion').style.display = 'flex';
      window.location.assign('#/login');
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
      window.location.assign('#/feed');
      const user = userCredential.user.email;
      // guardamos el email del usuario después de loguearse
      usuarioLogueado = user;
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
      // guardamos el email del usuario después de loguearse
      usuarioLogueado = user;
      window.location.assign('#/feed');
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

// funcion que observa el "estado: logueado o no"
export const currentUserOnline = () => {
  onAuthStateChanged(auth, (user) => {
    if (user === null || user === undefined) {
      setTimeout(() => {
        window.location.hash = '#';
      }, 2000);
      document.querySelector('#mensaje').innerHTML = 'Debe iniciar sesión para poder ver las publicaciones';
      document.querySelector('#atencion').style.display = 'flex';
    } else {
      console.log('si inicio sesion');
      window.location.assign('#/feed');
    }
  });
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
      likes: [],
      likesCount: 0,
      fecha: serverTimestamp(),
      usuario: usuarioLogueado,
    });
    console.log('Document written with ID: ', docRef.id);
  } catch (e) {
    console.error('Error adding document: ', e);
  }
}

// consulta de pub de forma descendente, se añadió Timestamp para la cronología
const orderPost = query(dbPost, orderBy('fecha', 'desc'));

// función para borrar Post
export const deletePost = (id) => deleteDoc(doc(db, 'Posts', id));

// función para obtener los posts
export const getPost = (id) => getDoc(doc(db, 'Posts', id));

// función para mostrar los Post en tempo real
export const onPost = (querySnapshot) => onSnapshot(orderPost, dbPost, querySnapshot);

// función para editar Post
export const updatePost = (id, content) => updateDoc(doc(db, 'Posts', id), content);

// funcion para dar like al post
export const likePost = async (id) => {
  // Declaramos una variable para guardar toda la db
  const postLike = doc(db, 'Posts', id);
  // Obtenemos el documento de cada post
  const post = await getDoc(postLike);
  // Guardamos la información del post en una constante
  const dataPost = post.data();
  // Creamos una constante para guardar la inf del contador likes
  const likesCount = dataPost.likesCount;
  // Ponemos condicional para saber si el usuario ya le dio like
  if (!dataPost.likes.includes(usuarioLogueado)) {
    // si no le ha dado like, este guarda el usuario y suma 1
    await updateDoc(postLike, {
      likes: arrayUnion(usuarioLogueado),
      likesCount: likesCount + 1,
    });
  } else {
    // si ya le ha dado like, este quita el usuario y resta 1
    await updateDoc(postLike, {
      likes: arrayRemove(usuarioLogueado),
      likesCount: likesCount - 1,
    });
  }
};
