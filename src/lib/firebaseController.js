import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithPopup,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  db,
  collection,
  addDoc,
  getDocs,
  onSnapshot,
  doc,
  query,
  provider,
  serverTimestamp,
  orderBy,
  deleteDoc
} from './firebaseInit.js';

//Función para crear usuario con correo y contraseña
export const newRegister = (email, password, name) => {
  const auth = getAuth();
  return createUserWithEmailAndPassword(auth, email, password, name)
};

//función para registro/ingreso con usuario y contraseña
export const loginGoogle = () => {
  const auth = getAuth();
  return signInWithPopup(auth, provider)
};

//función para ingresar con correo y contraseña
export const loginWithEmailAndPassword = (email, password) => {
  const auth = getAuth();
  return signInWithEmailAndPassword(auth, email, password)
};

// funcion observador
export const watcher = () => {
  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user === null || user === undefined) {
      window.location.hash = '#/login';
    } else {
      window.location.hash = '#/daily';
    }
  });
};

// funcion para conseguir info user
export const currentUser = () => {
  watcher();
  const auth = getAuth();
  const user = auth.currentUser;
  console.log (user);
  if (user === null || user === undefined) {
    window.location.hash = '#/login';
  } else {
    window.location.hash = '#/daily';
  }
  return user;
};

// creacion db
const dbPublications = collection(db, 'posts');

// creacion publicacion
export const createPost = (postDescription) => {
  //console.log(postDescription);
  return addDoc(dbPublications, { postDescription, postCreatedAt: serverTimestamp(),
  });
};

// funcion para ver publicaciones
export const getPost = () => {
  //console.log('hola soy publicaciones: ', getDocs(dbPublications));
  return getDocs(dbPublications);
};

// consulta de publicaciones de manera ordenada
const orderPost = query(dbPublications, orderBy('postCreatedAt', 'desc'));

// funcion para leer todas las publicación en tiempo real
export const readAllPost = (querySnapshot) => {
  //console.log('muestranos: ', onSnapshot(orderPost, dbPublications, querySnapshot));
  return onSnapshot(orderPost, dbPublications, querySnapshot);
};


export const deletePost = (id) => {
  deleteDoc(doc(dbPublications, 'posts', id));
};

export const logout = () => {
  const auth = getAuth();
  const logOutUser = signOut(auth);
  return logOutUser;
};

