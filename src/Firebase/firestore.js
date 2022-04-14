import { db } from "./firebase-controller.js";
import {
    collection,
    addDoc,
    getDocs,
    onSnapshot,
    deleteDoc,
    doc,
    getDoc,
    updateDoc
} from "https://www.gstatic.com/firebasejs/9.6.9/firebase-firestore.js";
import { getFirestore } from "./firebase-import.js";

// import { async } from "regenerator-runtime";

// // codigo para uso de firestore
// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.9/firebase-app.js";
// import { getFirestore } from "https://www.gstatic.com/firebasejs/9.6.9/firebase-firestore.js";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

export const saveFormPost = (textAreaPost, likes) => {
    addDoc(collection(db, "posts-collection"), { textAreaPost, likes });
};

export const getPost = async() => getDocs(collection(db, "posts-collection"));

export const onGetPost = (callback) => onSnapshot(collection(db, "posts-collection"), (callback));

export const deletePost = async(id) => deleteDoc(doc(db, "posts-collection", id));

export const getOnePost = async(id) => getDoc(doc(db, "posts-collection", id));

export const updatePost = async(id, newChanges) => updateDoc(doc(db, "posts-collection", id), newChanges);