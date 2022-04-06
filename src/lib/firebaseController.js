import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithPopup,
  signInWithEmailAndPassword,
  db,
  collection,
  addDoc,
  getDocs,
  onSnapshot,
  doc,
  query,
  provider,
} from './firebaseInit.js';

export const newRegister = (email, password, name) => {
  const auth = getAuth();
  return createUserWithEmailAndPassword(auth, email, password, name)
};

export const loginGoogle = () => {
  const auth = getAuth();
  return signInWithPopup(auth, provider)
};

export const loginWithEmailAndPassword = (email, password) => {
  const auth = getAuth();
  return signInWithEmailAndPassword(auth, email, password)
};

// creacion db
const dbPublications = collection(db, 'posts');

// creacion publicacion
export const createPost = (postDescription) => {
  console.log(postDescription);
  return addDoc(dbPublications, { postDescription });
};

// funcion para leer publicaciones
export const getPost = () => {
  console.log('hola soy publicaciones: ', getDocs(dbPublications));
  return getDocs(dbPublications);
};


// funcion para leer todas las publicación
export const readAllPost = (querySnapshot) => {
  console.log('muestranos: ', onSnapshot(dbPublications, querySnapshot));
  return onSnapshot(dbPublications, querySnapshot);
};

// //funcion para leer todas la publicaciones
// export const readPost = () => {
//   getPost().then((res)=>console.log('promesa: ', res));
//   const q = query(collection(db, "posts"));
//   const post = [];
//   onSnapshot(q, (querySnapshot) => {    
//     querySnapshot.forEach((doc) => {
//       post.push({
//         id: doc.id,
//         description: doc.data(),
//       });
//       console.log('post in: ', post);
//     });
//   });
//   console.log('total post: ', post);
//   return post 
// };




// export const deletePost = (id) => {
//   deleteDoc(doc(db, 'Posts', id));
// };

