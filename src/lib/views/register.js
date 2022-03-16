import { auth } from '../firebaseInit.js';
import { newRegister } from '../firebaseController.js';

export default () => {
  const divRegister = document.createElement('div');
  divRegister.setAttribute('class', 'container-div-register');
  const viewRegister = `
<<<<<<< HEAD
    <h1>THE DAILY PROPHET</h1>
    <H2> WELCOME WIZARDS</H2>
    <div class="main__div--Login">
        <input type="text" placeholder="Email" id="email">
        <br class="espacio">
        <input type="password" placeholder="Password" id="password">
        <p>REVELIO The Daily Prophet</p>
        <a href="#/daily"><button id="join" class="join"> Join </button></a>
        <p><hr>or<hr></p>
        <p>Continue with Google</p><!-- Imagen e icono  -->         
        </div>
    <p>Already a member? ALOHOMORA</p>
    <a href="#/login"><button href="#/login" id="login" class="Login"> Login </button></a>`;

  divRegister.innerHTML = viewRegister;

  const join = divRegister.querySelector('.join');

  join.addEventListener('click', (e) => {
    e.preventDefault();
    // console.log('click');

    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;
    // console.log (auth);
=======
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
>>>>>>> 1267c24d7e22068e06e8b8415aee1ee53aa147fe

    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;
    console.log(auth);
    newRegister(auth, email, password)
      .then((userCredential) => {
<<<<<<< HEAD
        // console.log('Join');
=======
        // Signed in
        console.log('Join');
>>>>>>> 1267c24d7e22068e06e8b8415aee1ee53aa147fe
        const user = userCredential.user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
<<<<<<< HEAD
        // console.log(errorCode, errorMessage);
=======
        console.log(errorCode, errorMessage);
>>>>>>> 1267c24d7e22068e06e8b8415aee1ee53aa147fe
      });
  });
  return divRegister;
};
