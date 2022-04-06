/* eslint-disable max-len */
import {
  getAuth,
  onAuthStateChanged,
  collection,
  getDocs,
  addDoc,
  onSnapshot,
  deleteDoc,
  doc,
  getDoc,
  updateDoc,
  arrayUnion,
  arrayRemove,
  query,
  orderBy,
} from './firebase-utils.js';

import { database } from './firebase-init.js';

async function getRecipes() {
  const recipesCollection = query(collection(database, 'recipes'), orderBy('fechaPublicacion', 'desc'));
  const recipesSnapshot = await getDocs(recipesCollection);
  const recipesList = recipesSnapshot.docs.map((document) => document.data());
  return recipesList;
}

const onGetRecipes = (callback) => onSnapshot(query(collection(database, 'recipes'), orderBy('fechaPublicacion', 'desc')), callback);
const saveRecipe = (title, description) => {
  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const userRecipe = {
        uid: user.uid, displayName: user.displayName, email: user.email, photoURL: user.photoURL,
      };
      addDoc(
        collection(database, 'recipes'),
        {
          title, description, user: userRecipe, likes: [], fechaPublicacion: new Date(),
        },
      );
    }
  });
};
export const deleteRecipe = (id) => deleteDoc(doc(database, 'recipes', id));
export const editeRecipe = (id) => getDoc(doc(database, 'recipes', id));
export const updateRecipe = (id, newChanges) => updateDoc(doc(database, 'recipes', id), newChanges);
export const likeRecipe = (uid, idRecipe) => updateDoc(doc(database, 'recipes', idRecipe), {
  likes: arrayUnion(uid),
});
export const dislikeRecipe = (uid, idRecipe) => updateDoc(doc(database, 'recipes', idRecipe), {
  likes: arrayRemove(uid),
});
export { getRecipes, saveRecipe, onGetRecipes };
