import { collection, addDoc, getDocs, updateDoc, arrayUnion, arrayRemove, doc, } from './firebase-imports.js';
import { db } from './confiFirebase.js';

/* Creando colleccion de post */

export const savePost = async (descripcion) => {
  try {
    const docRef = await addDoc(collection(db, 'posts'), {
      descripcion,
      user: localStorage.getItem('emailForSignIn'),
      likes: [],
    });
    // eslint-disable-next-line no-console
    console.log('Document written with ID: ', docRef.id);
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
    let post = [];
    const querySnapshot = await getDocs(collection(db, 'posts'));
    querySnapshot.forEach((doc) => {
      const taks = doc.data();
      post.push(taks['descripcion']);
      let post2 = post.flat();
      console.log(doc);
      /* .post2("posts")
       .orderBy("", "desc") */
      return post2;
    });
    return post;
  } catch (error) {
    console.log(error);
  }
};

/* Guardando like de post */

/*export const likePost2 = async () => {
  const likePost = doc(db, 'posts', 'likes');

  // Atomically add a new region to the "regions" array field.
  await updateDoc(likePost, {
    likes: arrayUnion('user.uid'),
  });

  // Atomically remove a region from the "regions" array field.
  await updateDoc(likePost, {
    likes: arrayRemove('user.uid'),
  });
};
*/
/* Editar post */
 /*export const editar = async (uid) => {
  const washingtonRef = doc(db, "cities", "DC");

  // Set the "capital" field of the city 'DC'
  await updateDoc(washingtonRef, {
    descripcion,
  });
};*/
