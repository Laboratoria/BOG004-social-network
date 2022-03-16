import { auth } from '../firebaseInit.js';
import { newRegister } from '../firebaseController.js';

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
        <img src="./img/google.png"
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
    console.log('click');

    const formNewRegister = document.querySelector('#formNewRegister');
    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;
    const errorMessageJoin = document.querySelector('#errorMessageJoin');
    errorMessageJoin.innerHTML = '';

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
              errorMessageJoin.innerHTML = 'Invalid email';
              break;
            case 'auth/weak-password':
              errorMessageJoin.innerHTML = 'The password must contain minimum six characters';
              break;
            case 'auth/email-already-in-use':
              errorMessageJoin.innerHTML = 'Your email is already registered, log in';
              break;

            default:
              errorMessageJoin.innerHTML = 'Oops something went wrong';
              break;
          }
        });
    } else {
      errorMessageJoin.innerHTML = '⚠️ Enter name';
      console.log('no ingreso nombre');
    }
  });
  return divRegister;
};
