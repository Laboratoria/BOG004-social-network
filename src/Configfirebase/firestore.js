import {
  collection, addDoc, getDocs, updateDoc, arrayUnion, arrayRemove, doc, deleteDoc,
} from './firebase-imports.js';
import { db } from './confiFirebase.js';

/* Creando colleccion de post */

export const savePost = async (descripcion) => {
  try {
    const docRef = await addDoc(collection(db, 'posts'), {
      descripcion,
      user: localStorage.getItem('emailForSignIn'),
      likes: [],
      dateCreated: new Date().toDateString(),
    });
    // eslint-disable-next-line no-console
    console.log('Document written with ID: ', docRef);
    return docRef.id;
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log('Error adding document: ', e);
    return e;
  }
};

/* visualizacion de post */
export const viewpost = async () => {
  try {
    const post = [];
    const querySnapshot = await getDocs(collection(db, 'posts'));
    querySnapshot.forEach((doc) => {
      post.push(doc);
    });
    return post;
  } catch (error) {
    console.log(error);
  }
};

/* Guardando like de post */
export const likePost = async (id, likes) => {
  const likes2 = [];
  const saveLikes = doc(db, 'posts', id);
  const actlikes = await updateDoc(saveLikes, {
    likes: likes2.push(id),
  });
  console.log('act', actlikes);
  return actlikes;
  // Atomically remove a region from the "regions" array field.
//   updateDoc(saveLikes, {
//     likes: arrayRemove('likes')
// });
};

/* Editar post */
export const editar = async (id, descripcion) => {
  const post = doc(db, 'posts', id);
  const actualizar = await updateDoc(post, {
    descripcion,
  });
  return actualizar;
};

export const deletepost = async (id, descripcion) => {
  const post = doc(db, 'posts', id);
  const borrar = await deleteDoc(post, {
    descripcion,
  });
  return borrar;
};
