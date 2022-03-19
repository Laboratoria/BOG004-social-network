import { auth, provider } from '../firebaseInit.js';
import { newRegister, loginGoogle } from '../firebaseController.js';

export default () => {
  const divRegister = document.createElement('div');
  divRegister.setAttribute('class', 'container-div-register');
  const viewRegister = `
    <main>
    <div class="main__div--tittle">
      <img src="./img/title.png">
    </div>
    <h2 class="welcome-wizards"><b> WELCOME WIZARDS</b></h2>
    <div class="main__div--login">
      <form id='formNewRegister'>  
        <input type="text" placeholder="Name" id="name">
        <input type="text" placeholder="Email" id="email">
        <br class="espacio">
        <input type="PASSWORD" placeholder="Password" id="password">

        <div id='modalMessage'>
            <div id='textModal'></div>            
        </div>
      </form>

      <div id='errorMessageJoin'></div>

      <p class="p_join"><b>REVELIO<b> The Daily Prophet</p>
      <button class="join"> Join </button>
      <div class="div-or">
      <p class="or">or</p>
      </div>
      <div class="continue-with-google">
        <p>Continue with Google</p>
        <img src="./img/hand.png" class="hand">
        <button type='button' id='googleButton' class='btn-google'>
        <img src="./img/google.png" id='img-google'>
        </button>      
      </div>
    </div>
    <p class="alohomora">Already a member? ALOHOMORA</p>
    <a href='#/Login'><button class="Login"> Login </button></a>
  </main>
  `;
  divRegister.innerHTML = viewRegister;

  const join = divRegister.querySelector('.join');
  join.addEventListener('click', (e) => {
    e.preventDefault();
    // console.log('click');

    const formNewRegister = document.querySelector('#formNewRegister');
    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;
    const errorMessageJoin = document.querySelector('#errorMessageJoin');
    errorMessageJoin.innerHTML = '';

    newRegister(auth, email, password)
      .then((userCredential) => {
        // Signed in
        console.log('Joined');
        userCredential.user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
    if (name !== '') {
      newRegister(auth, email, password, name)
        .then((userCredential) => {
          userCredential.user;

          document.querySelector('#modalMessage').style.display = 'flex';
          document.querySelector('#textModal').innerHTML = 'WELCOME TO THE DAILY PROPHET';
          setTimeout(() => {
            document.querySelector('#modalMessage').style.display = 'none';
          }, 8000);
          formNewRegister.reset();
          console.log('Join');
        })
        .catch((error) => {
          const errorCode = error.code;
          //   const errorMessage = error.message;
          //   console.log(errorCode, errorMessage);
          switch (errorCode) {
            case 'auth/invalid-email':
              errorMessageJoin.innerHTML = 'Invalid Email';
              break;
            case 'auth/weak-password':
              errorMessageJoin.innerHTML = 'The password must contain minimum six characters';
              break;
            case 'auth/email-already-in-use':
              errorMessageJoin.innerHTML = 'Your email is already registered';
              break;
            default:
              errorMessageJoin.innerHTML = 'Oops something went wrong';
              break;
          }
        });
    } else {
      errorMessageJoin.innerHTML = '⚠️ Name is a require field';
      console.log('No ingresó nombre');
    }
  });

  const googleBotton = divRegister.querySelector('#googleButton');
  googleBotton.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('Click en Google');
    loginGoogle(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
      }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      // // The email of the user's account used.
      // const email = error.email;
      // // The AuthCredential type that was used.
      // const credential = GoogleAuthProvider.credentialFromError(error);
      });
  });
  return divRegister;
};
