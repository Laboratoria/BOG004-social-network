/* eslint-disable max-len */
import {
  getAuth, onAuthStateChanged, collection, getDocs, addDoc, onSnapshot, deleteDoc, doc, getDoc
} from './firebase-utils.js';

import { database } from './firebase-init.js';

async function getRecipes() {
  const recipesCollection = collection(database, 'recipes');
  const recipesSnapshot = await getDocs(recipesCollection);
  const recipesList = recipesSnapshot.docs.map((doc) => doc.data());
  return recipesList;
}

const onGetRecipes = (callback) => onSnapshot(collection(database, 'recipes'), callback);
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
          title, description, user: userRecipe, likes: 0,
        },
      );
    } else {
      console.error('No hay usuario logueado');
    }
  });
};
export const deleteRecipe = (id) => deleteDoc(doc(database, 'recipes', id));
export const editeRecipe = (id) => getDoc(doc(database, 'recipes', id));
export { getRecipes, saveRecipe, onGetRecipes };
