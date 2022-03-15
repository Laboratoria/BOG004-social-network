import { auth } from '../firebaseInit.js';
import { newRegister } from '../firebaseController.js';

export default () => {
    const divRegister = document.createElement("div");
    divRegister.setAttribute ("class", "container-div-register");
    const viewRegister = `
    <h1>THE DAILY PROPHET</h1>
    <H2> WELCOME WIZARDS</H2>
    <div class="main__div--Login">
        <input type="text" placeholder="Email" id="email">
        <br class="espacio">
        <input type="text" placeholder="Password" id="password">
        <p>REVELIO The Daily Prophet</p>
        <a href="#/daily"><button id="join" class="join"> Join </button></a>
        <p><hr>or<hr></p>
        <p>Continue with Google</p><!-- Imagen e icono  -->         
        </div>
    <p>Already a member? ALOHOMORA</p>
    <a href="#/login"><button href="#/login" id="login" class="Login"> Login </button></a>`

divRegister.innerHTML = viewRegister;

const join= divRegister.querySelector(".join");
    
    join.addEventListener('click', (e) => {
        e.preventDefault();
        console.log("click")

    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;
    console.log (auth);

    newRegister(auth, email, password)
      .then((userCredential) => {
        //Signed in
        console.log("Join")
        const user = userCredential.user;
    })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
    })
  })
  return divRegister;
}