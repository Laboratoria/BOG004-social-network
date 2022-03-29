import {
  createUser, existingUser, observerUserState, signInWithGoogle, closeSession, getPostList, addPost,
} from './firebase/controlerfirebase.js';

function registerUser() {
  // Funcionalidad enlaces y botones de la sección y registro.

  const registerBtn = document.getElementById('registerBtn');

  console.log(`Cargando el boton ${registerBtn}`);

  registerBtn.addEventListener('click', () => {
    // 1. Traer los inputs de la vista y luego .value
    // 2. Validar?
    // 3. Llamar a la funcion createUserWith..blablabla

    const emailValidation = document.getElementById('registerUsername').value;
    const passwordValidation = document.getElementById('registerPassword').value;

    createUser(emailValidation, passwordValidation);
  });
}

//

function loginUser() {
  console.log('loginUser Runs');
  const loginBtn = document.getElementById('loginBtn');

  console.log(`Cargando el boton ${loginBtn}`);

  loginBtn.addEventListener('click', () => {
    const loginEmailValidation = document.getElementById('loginEmail').value;
    const loginPasswordValidation = document.getElementById('loginPassword').value;

    existingUser(loginEmailValidation, loginPasswordValidation);
  });
}

function authAddGoogle() {
  // Funcionalidad enlaces y botones de la sección autenticacion con google.
  const googleBtn = document.getElementById('googleBtn');
  console.log(`autenticando con google ${googleBtn}`);
  googleBtn.addEventListener('click', () => {
    signInWithGoogle();
  });
}

//

function registerCloseSession() {
  console.log('logoutBtn Runs');
  const logoutBtn = document.getElementById('logoutBtn');
  console.log(`Cargando el boton logout ${logoutBtn}`);
  logoutBtn.addEventListener('click', () => {
    closeSession();
  });
}

function registerAddPost() {
  const saveThought = document.getElementById('btnSaveThought');
  saveThought.addEventListener('click', () => {
    const thinksuseredit = document.getElementById('thinksuseredit').value;
    addPost(thinksuseredit);
  });
}

export {
  registerUser, loginUser, observerUserState, authAddGoogle, registerCloseSession,
  getPostList, registerAddPost,
};
