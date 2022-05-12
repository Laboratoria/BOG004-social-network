import {
  collection, addDoc, getDocs, updateDoc, arrayUnion, arrayRemove, doc, deleteDoc, getDoc,
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
// eslint-disable-next-line
export const viewPost = async () => {
  try {
    const post = [];
    const querySnapshot = await getDocs(collection(db, 'posts'));
    // eslint-disable-next-line
    querySnapshot.forEach((doc) => {
      post.push(doc);
    });
    return post;
  } catch (error) {
    setTimeout(() => {
    // eslint-disable-next-line
      alert('Por favor inicia sesión')
    }, 2000);
    // eslint-disable-next-line
    console.log(error);
  }
};

/* Guardando like de post */
export const likePost = async (id, email) => {
  const saveLikes = doc(db, 'posts', id);
  const post = await getDoc(saveLikes);
  const dataPost = post.data();
  const likesCount = dataPost.likesCounting;
  // eslint-disable-next-line
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
    // eslint-disable-next-line
    console.log(dataPost, 'que nos trae');
  }
};

/* Editar post */
export const edit = async (id, descripcion) => {
  const post = doc(db, 'posts', id);
  const actualize = await updateDoc(post, {
    descripcion,
  });
  return actualize;
};

/* Eliminar post */
export const deletePost = async (id, descripcion) => {
  const post = doc(db, 'posts', id);
  const postDelete = await deleteDoc(post, {
    descripcion,
  });
  return postDelete;
};

/* actualizaciones en tiempo real */
/* export const actualize = () => {
  const q = query(collection(db, 'posts')  orderBy('date', 'desc')) );
  onSnapshot(q, (querySnapshot) => {
    const boxPosts = [];
    // eslint-disable-next-line
    querySnapshot.forEach((doc) => {
      boxPosts.push({
        descripcion: doc.data().descripcion,
        data: doc.data(),
        // user: localStorage.getItem('emailForSignIn'),
        dateCreated: new Date().toDateString(),
        likes: [],
        likesCounting: 0,
      });
    });
    // eslint-disable-next-line
    console.log(boxPosts, 'esto es lo que debe actualizar');
    return boxPosts;
  });
}; */
