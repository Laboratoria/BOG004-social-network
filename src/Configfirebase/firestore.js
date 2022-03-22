/* import { firebaseApp } from '../Configfirebase/confiFirebase.js';
import { collection, addDoc } from './firebase-imports.js'
import { db } from './confiFirebase.js'

const firestore = collection(firebaseApp)
export const savePost = ()=>{
    try {
        const docRef = await addDoc(collection(db, "users"), {
          first: "Ada",
          last: "Lovelace",
          born: 1815
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
      
 */

