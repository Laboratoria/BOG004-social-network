import {
  collection, addDoc, getDocs, updateDoc, arrayUnion, arrayRemove, doc, deleteDoc, query, where, onSnapshot, getDoc
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
      likesCounting: 0,
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

/* export const saveComment = async (comentarios) => {
  try {
    const docRef = await addDoc(collection(db, 'comments'), {
      comentarios,
    });
    // eslint-disable-next-line no-console
    console.log('Document written with ID: ', docRef);
    return docRef.id;
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log('Error adding document: ', e);
    return e;
  }
}; */

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
export const likePost = async (id, email) => {
  const saveLikes = doc(db, 'posts', id);
  const post = await getDoc(saveLikes);
  const dataPost = post.data();
  const likesCount = dataPost.likesCounting;
  console.log(likesCount);
  if (dataPost.likes.includes(email)) {
    await updateDoc(saveLikes, {
      likes: arrayRemove(email),
      likesCounting: likesCount - 1,
    });
  } else {
    await updateDoc(saveLikes, {
      likes: arrayUnion(email),
      likesCounting: likesCount + 1,
    });
    console.log(dataPost, 'que nos trae');
  }
};

/* Editar post */
export const editar = async (id, descripcion) => {
  const post = doc(db, 'posts', id);
  const actualizar = await updateDoc(post, {
    descripcion,
  });
  return actualizar;
};

/* Eliminar post */
export const deletepost = async (id, descripcion) => {
  const post = doc(db, 'posts', id);
  const borrar = await deleteDoc(post, {
    descripcion,
  });
  return borrar;
};
/*actualizaciones en tiempo real*/
export const actualizaciones = () => {
  const q = query(collection(db, 'posts'), where('descripcion', '==', 'descripcion'));
  const unsubscribe = onSnapshot(q, (querySnapshot) => {
    const posts = [];
    querySnapshot.forEach((change) => {
      if (change.type === "removed") {
        console.log("Removed :", change.doc.data());
      }
      posts.push(doc.data().descripcion);
    });
    console.log('actualizando post en tiempo real', posts.join(", "));
  });
};
