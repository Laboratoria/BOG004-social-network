import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  getFirestore,
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  getDoc,
} from '../FirebaseConfig.js';

export const auth = getAuth();
export const newRegister = (email, password) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log('registrado');
      const user = userCredential.user;
      document.querySelector('#mensaje').innerHTML = 'Usuario registrado exitosamente';
      document.querySelector('#atencion').style.display = 'flex';
    })
    .catch((error) => {
      const errorCode = error.code;
      console.log('erroCode: ', errorCode);
      switch (errorCode) {
        case 'auth/invalid-email':
          document.querySelector('#mensaje').innerHTML = 'Debe ingresar un correo válido';
          document.querySelector('#atencion').style.display = 'flex';
          break;
        case 'auth/email-already-in-use':
          document.querySelector('#mensaje').innerHTML = 'El correo ya está registrado';
          document.querySelector('#atencion').style.display = 'flex';
          break;
        case 'auth/weak-password':
          document.querySelector('#mensaje').innerHTML = 'La contraseña debe tener mínimo 6 caracteres';
          document.querySelector('#atencion').style.display = 'flex';
          break;
        default:
          break;
      }
    });
};
export const newLogin = (email, password) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log('logueado...');
      window.location.assign('#/feed');
      const user = userCredential.user;
    })
    .catch((error) => {
      const errorCode = error.code;
      console.log(errorCode);
      switch (errorCode) {
        case 'auth/wrong-password':
          document.querySelector('#mensaje').innerHTML = 'Contraseña incorrecta, por favor verifique';
          document.querySelector('#atencion').style.display = 'flex';
          break;
        case 'auth/user-not-found':
          document.querySelector('#mensaje').innerHTML = 'Primero regístrese para poder ingresar';
          document.querySelector('#atencion').style.display = 'flex';
          break;
        case 'auth/invalid-email':
          document.querySelector('#mensaje').innerHTML = 'Debe ingresar un correo válido';
          document.querySelector('#atencion').style.display = 'flex';
          break;
        default:
          break;
      }
    });
};
export const provider = new GoogleAuthProvider();
export const googlePopUp = () => signInWithPopup(auth, provider);

export const googleLogin = () => {
  googlePopUp(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      // ...
      window.location.assign('#/feed');
      console.log('logueado con google');
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      console.log(errorCode);
      const errorMessage = error.message;
      console.log(errorMessage);
      // The email of the user's account used.
      const email = error.email;
      console.log(email);
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
};

export const logOut = () => {
  signOut(auth).then(() => {
  // Sign-out successful.
    window.location.assign('#');
  }).catch((error) => {
  // An error happened.
  });
  console.log('adiós, vuelve pronto');
};

// AQUI EMPEZAMOS A USAR FIRESTORE
const db = getFirestore();

// esta es la funcion que crea los post
let editStatus = false;
export async function crearPost() {
  try {
    const docRef = await addDoc(collection(db, 'Posts'), {
      content: document.querySelector('#contentFeed').value,
    });
    console.log('Document written with ID: ', docRef.id);
  } catch (e) {
    console.error('Error adding document: ', e);
  }
}

export const deletePost = (id) => deleteDoc(doc(db, 'Posts', id));
export const getPost = (id) => getDoc(doc(db, 'Posts', id));

export function readPost(mostrarPost, divForm) {
  // console.log('lo que recibe como param: ', mostrarPost);
  const contentFeed = divForm.querySelector('#contentFeed');
  // const mostrarPost = document.querySelector('#mostrarPost');
  const querySnapshot = getDocs(collection(db, 'Posts'));
  querySnapshot.then((res) => {
    // console.log(res);
    let templateMostrarPost = '';
    res.forEach((doc) => {
      // console.log('doc: ', doc);
      const post = doc.data();
      // console.log(doc);
      templateMostrarPost += `
      <div class="contenedorPost">
        <div class="contentPost">
          <p>${post.content}</p>
        </div>
        <div class="btnPost">
          <button class="btnEdit" data-post="${doc.id}">Editar</button>
          <button class="btnDelete" data-post="${doc.id}">Eliminar</button>
        </div>
      </div>
    `;
    });
    mostrarPost.innerHTML = templateMostrarPost;
    const btnsEdit = mostrarPost.querySelectorAll('.btnEdit');
    console.log(btnsEdit);
    btnsEdit.forEach((btn) => {
      btn.addEventListener('click', async ({ target: { dataset } }) => {
        const doc = await getPost(dataset.post);
        const postEdit = doc.data();
        contentFeed.value = postEdit.content;
        editStatus = true;
        readPost(mostrarPost);
      });
    });

    const btnsDelete = mostrarPost.querySelectorAll('.btnDelete');
    console.log(btnsDelete);
    btnsDelete.forEach((btn) => {
      btn.addEventListener('click', ({ target: { dataset } }) => {
        deletePost(dataset.post);
        readPost(mostrarPost);
      });
    });
  });
}
