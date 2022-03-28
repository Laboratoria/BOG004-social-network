import { collection, addDoc, getDocs } from './firebase-imports.js';
import { db } from './confiFirebase.js';

/* intentando obtener informacion del usuario */

export const savePost = async (descripcion) => {
  try {
    const docRef = await addDoc(collection(db, 'posts'), {
      descripcion,
      user: localStorage.getItem('emailForSignIn'),
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
