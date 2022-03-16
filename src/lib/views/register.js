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
      <input type="text" placeholder="Email" id="email">
      <br class="espacio">
      <input type="text" placeholder="Password" id="password">
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
    <button class="Login"> Login </button>
  </main>
  `;
  divRegister.innerHTML = viewRegister;

  const join = divRegister.querySelector('.join');
  join.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('click');

    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;
    console.log(auth);
    newRegister(auth, email, password)
      .then((userCredential) => {
        // Signed in
        console.log('Join');
        const user = userCredential.user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  });
  return divRegister;
};
