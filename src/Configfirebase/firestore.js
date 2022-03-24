import { collection, addDoc } from './firebase-imports.js'
import { db } from './confiFirebase.js'

export const savePost = async (descripcion) => {
  try {
  const docRef = await addDoc(collection(db, 'posts'), {
    descripcion: descripcion,
  });
  console.log("Document written with ID: ", docRef.id);
  return docRef.id
} catch (e) {
  console.error("Error adding document: ", e);
  return e;
}
};