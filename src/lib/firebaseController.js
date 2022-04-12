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
  getDoc,
  onSnapshot,
  doc,
  query,
  updateDoc,
  provider,
  serverTimestamp,
  orderBy,
  deleteDoc,
  arrayUnion,
  arrayRemove,
} from './firebaseInit.js';

// Crear usuario con correo y contraseña
export const newRegister = (email, password, name) => {
  const auth = getAuth();
  return createUserWithEmailAndPassword(auth, email, password, name);
};

// Registro/ingreso con usuario y contraseña
export const loginGoogle = () => {
  const auth = getAuth();
  return signInWithPopup(auth, provider);
};

// Ingresar con correo y contraseña
export const loginWithEmailAndPassword = (email, password) => {
  const auth = getAuth();
  return signInWithEmailAndPassword(auth, email, password);
};

// Observador
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

// Captar Informacion de Usuario
export const currentUser = () => {
  watcher();
  const auth = getAuth();
  const user = auth.currentUser;
  if (user === null || user === undefined) {
    window.location.hash = '#/login';
  } else {
    window.location.hash = '#/daily';
  }
  return user;
};

// Declaracion db para guardar coleccion
const dbPublications = collection(db, 'posts');

// Crear post
export const createPost = (postDescription, uidPost, arraylike) => addDoc(dbPublications, {
  postDescription,
  uidPost,
  arraylike,
  postCreatedAt: serverTimestamp(),
});

// Obtener documento de 'Posts'
export const getPost = () => getDocs(dbPublications);

// Consulta de publicaciones de manera ordenada
const orderPost = query(dbPublications, orderBy('postCreatedAt', 'desc'));

// Obtiene los documentos en tiempo real
export const readAllPost = (querySnapshot) => onSnapshot(orderPost, dbPublications, querySnapshot);

// Borrar documento de la coleccion
export const deletePost = (id) => {
  deleteDoc(doc(dbPublications, id));
};

// Acceder a un post por ID
export const giveMethePost = (id) => {
  const docRef = doc(dbPublications, id);
  const docSnap = getDoc(docRef);
  return docSnap;
};

// Actualizar una publicación
export const updatePost = (id, postDescriptionUpdate) => {
  updateDoc(doc(dbPublications, id), postDescriptionUpdate);
};

// Agregar like
export const likes = (id, userInfoId) => {
  updateDoc(doc(dbPublications, id), { arraylike: arrayUnion(userInfoId) });
};

// Quitar like
export const dislikes = (id, userInfoId) => {
  updateDoc(doc(dbPublications, id), { arraylike: arrayRemove(userInfoId) });
};

// Cerrar Sesion
export const logout = () => {
  const auth = getAuth();
  const logOutUser = signOut(auth);
  return logOutUser;
};
