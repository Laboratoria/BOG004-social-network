/* eslint-disable max-len */
import {
  getAuth, onAuthStateChanged, collection, getDocs, addDoc,
} from './firebase-utils.js';

import { database } from './firebase-init.js';

async function getRecipes() {
  const recipesCollection = collection(database, 'recipes');
  const recipesSnapshot = await getDocs(recipesCollection);
  const recipesList = recipesSnapshot.docs.map((doc) => doc.data());
  return recipesList;
}

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

export { getRecipes, saveRecipe };
