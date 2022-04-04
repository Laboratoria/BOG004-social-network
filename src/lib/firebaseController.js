import {
  auth,
  createUserWithEmailAndPassword,
  signInWithPopup,
  signInWithEmailAndPassword, 
  db,
  collection, 
  addDoc,
  getDocs,
  onSnapshot,
  doc,
  query,
}

from './firebaseInit.js';

export const newRegister = (auth, email, password, name) => {
  return createUserWithEmailAndPassword(auth, email, password, name)
};

export const loginGoogle = (auth, provider) => {
  return signInWithPopup(auth, provider)
};

export const loginWithEmailAndPassword = (auth, email, password) => {
  return signInWithEmailAndPassword(auth, email, password)
};

export const createPost = (postDescription) => {
  return addDoc(collection(db, 'posts'), {postDescription});
};
// funcion para leer publicaciones
export const getPost = () => {
  console.log(getDocs(collection(db, 'posts')));
  return getDocs(collection(db, 'posts'));
};

//funcion para leer todas la publicaciones
export const readPost = () => {
  const q = query(collection(db, "posts"));
  const unsubscribe = onSnapshot(q, (querySnapshot) => {
  const post = [];
  querySnapshot.forEach((doc) => {
      post.push({
        id: doc.id,
        description: doc.data(),
      });
      // console.log(doc.id, doc.data().postDescription);
  });
  console.log(post);
  return post //console.log("Posts: ", post.join(", "));
});


  // console.log(onSnapshot(collection(db, 'posts'), querySnapshot));
  // return onSnapshot(collection(db, 'posts'), querySnapshot);
};




// export const deletePost = (id) => {
//   deleteDoc(doc(db, 'Posts', id));
// };

