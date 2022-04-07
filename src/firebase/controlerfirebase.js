import {
  getAuth, createUserWithEmailAndPassword,
  signInWithEmailAndPassword, onAuthStateChanged, signOut, signInWithPopup,
  GoogleAuthProvider,
  getDocs, collection, addDoc, getFirestore, doc, setDoc, getDoc, serverTimestamp, orderBy,
  query, deleteDoc,
} from './firebase-utils.js';

const createUser = (email, password) => {
  const auth = getAuth();
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      // const user = userCredential.user;
      // eslint-disable-next-line no-console
      console.log(`El usuario ${userCredential} fue creado!!!`);
    })
    .catch((error) => {
      const getDivError = document.getElementById('id-message-error-record');
      const errorCode = error.code === undefined ? '' : error.code;
      const errorMessage = error.message === undefined ? '' : error.message;
      // eslint-disable-next-line no-console
      console.log(errorCode);
      console.log(errorMessage);
      if (errorCode === 'auth/email-already-in-use') {
        getDivError.innerHTML = '<p>El usuario ya existe, inicie sesión</p>';
      } else {
        getDivError.innerHTML = '<p>Por favor ingresar correo electronico y/o contraseña validos</p>';
      }
    });
};

function existingUser(email, password) {
  const auth = getAuth();
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log(`El usuario ${user} se ha autenticado!!!`);
      // ...
    })
    .catch((error) => {
      const getDivError = document.getElementById('id-message-error-login');
      const errorCode = error.code === undefined ? '' : error.code;
      const errorMessage = error.message === undefined ? '' : error.message;
      // eslint-disable-next-line no-console
      console.log(errorCode);
      console.log(errorMessage);
      getDivError.innerHTML = '<p>Usuario o contraseña invalidos, por favor ingresar nuevamente</p>';
    });
}

let usuario;

function getUser() {
  return usuario;
}

function observerUserState() {
  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    usuario = user;
    if (user) {
      // console.table(user);
      window.location.hash = '#wall';
    } else if (window.location.hash === '#wall') {
      // User is signed out
      window.location.hash = '';
    }
  });
}

const closeSession = () => {
  const auth = getAuth();
  // const user = auth.currentUser;

  signOut(auth)
    .then(() => {
      console.log('sesion cerrada');
    })
    .catch((error) => {
      console.error(error);
    });
};

const provider = new GoogleAuthProvider();
console.log('provider: ', provider);

const signInWithGoogle = () => {
  const auth = getAuth();
  signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user;
      console.log(`El usuario ${user} se ha autenticado!!!`);
    // ...
    }).catch((error) => {
      // eslint-disable-next-line no-console
      console.error(error);
    });
};

/* FIRESTORE */

const getPostList = async () => {
  const db = getFirestore();
  const querySnapshot = await getDocs(query(collection(db, 'posts'), orderBy('date', 'desc')));
  const getDivPosts = document.getElementById('posts');
  let Posts = '';
  let PostJS = '';

  querySnapshot.forEach((document) => {
    const data = document.data();
    let likes = data.likes;
    // 2.1 likes === undefined tengo que crear el arreglo
    if (likes === undefined) {
      likes = [];
    }
    let likeColor = '';
    const index = likes.indexOf(usuario.email);
    if (index === -1) {
      // 2.2.1 Si no esta, pintelo de rosado
      likeColor = '';
    } else {
      // 2.2.2 Si SI esta, pintelo de rojo
      likeColor = 'rgba(255, 112, 131, 1)';
    }
    Posts += `
      <section class="post-container">
        <div class="post-avatar">
          <img class="avatar" src="${data.photoUrl}" />
        </div>
        <div class="post-content">
          <h3 class="user-name">${data.user}</h4>
          <h4 class="e-mail">${data.email}</h4>
          <p id="thougth${document.id}" class="text-post-g">${data.thinking}</p>
          <textarea id="editThougth${document.id}" cols="30" rows="10" style="display:none" class="edit_post"></textarea>
        </div>
        </section>
        <div class="posticons">
        <div>
        <i id="doLikeImg${document.id}" class="fa-solid fa-heart posticon" style="color: ${likeColor}"></i><span class= "styleCountLike">${likes.length}<span>
        </div>
        <i id= "btnEditThougth${document.id}" class="fa-solid fa-pen-to-square posticon"></i>        
        <i id="btnDeletePost${document.id}" class="fa-solid fa-trash-can posticon"></i>      
        <i id= "checkEdit${document.id}" class="fa-solid fa-check"  style="display:none"></i>  
        </div>
      
    `;

    PostJS += `
      document.getElementById('doLikeImg${document.id}').addEventListener('click', () => {doLike('${document.id}');});
      document.getElementById('btnEditThougth${document.id}').addEventListener('click', () => {showEditThought('${document.id}', '${data.thinking}');});
      document.getElementById('checkEdit${document.id}').addEventListener('click', () => {doEditPost('${document.id}');});
      document.getElementById('btnDeletePost${document.id}').addEventListener('click', () => {deletePost('${document.id}');});
    `;
  });

  getDivPosts.innerHTML = Posts;
  // eslint-disable-next-line no-eval
  eval(PostJS);
};

const editPosts = async (idPost, thinking) => {
  const db = getFirestore();
  const docRef = doc(collection(db, 'posts'), idPost);
  await setDoc(
    docRef,
    {
      thinking,
    },
    { merge: true },
  );
  console.log(`${idPost} ${thinking}`);
  getPostList();
};

const addPost = async (thinking) => {
  try {
    const db = getFirestore();
    const docRef = await addDoc(collection(db, 'posts'), {
      user: usuario.displayName,
      email: usuario.email,
      photoUrl: usuario.photoURL,
      thinking,
      date: serverTimestamp(),
    });
    console.log('Document written with ID: ', docRef.id);
    getPostList();
  } catch (e) {
    console.error('Error adding document: ', e);
    // TODO: escribir la causa del error en la pantalla o algo asi como en los de auth
  }
  getPostList();
};

const doLike = async (idPost) => {
  console.log(idPost);
  try {
    const db = getFirestore();
    const docRef = doc(collection(db, 'posts'), idPost);
    // 1. Traer el documnento getDoc
    const postLike = await getDoc(docRef);
    // 2. doc.data().likes
    let likes = postLike.data().likes;
    // 2.1 likes === undefined tengo que crear el arreglo
    if (likes === undefined) {
      likes = [];
    }
    // 2.2 buscar el correo en el arreglo, indexOf ... usuario.email
    const index = likes.indexOf(usuario.email);
    if (index === -1) {
      // 2.2.1 Si no esta, agrega el correo al arreglo
      likes.push(usuario.email);
    } else {
      // 2.2.2 Si SI esta, lo quita del arreglo algo.remove
      likes.splice(index);
    }
    // 3. setDoc
    await setDoc(
      docRef,
      {
        likes, // thinking: valor
      },
      { merge: true },
    );
    console.log('Document updated with ID: ', docRef.id);
    getPostList();
  } catch (e) {
    console.error('Error adding document: ', e);
    // TODO: escribir la causa del error en la pantalla o algo asi como en los de auth
  }
  getPostList();
};

// Eliminar posts
const deletePost = (id) => {
  console.log(id);
  const db = getFirestore();
  deleteDoc(doc(db, 'posts', id));
  getPostList();
};

export {
  createUser, existingUser, observerUserState, signInWithGoogle, closeSession, getPostList,
  addPost, getUser, doLike, deletePost, editPosts,
};
