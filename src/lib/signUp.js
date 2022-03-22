import { SignUpUser } from './firebase.js';
import { changeView } from './viewController.js';
export default () => {
  const viewSignUp = ` <form class="signUpForm" id="signUpForm">
  <div class="containerForm"> 
    <figure>
      <img class="Icono" src="images/iPhone 13/Logo.png" alt="Icono"><br>
    </figure>
    <h1>SIGN UP</h1>
    <input type="text" class="nickname" id="nickname" placeholder="nickname"><br>
    <input type="email" class="email" id="email" placeholder="email" required minlength="8"> <br>
    <input type="password" class="password" id="password" placeholder="password"><br>
    <h6>  By clicking Agree & Join, you agree to the  User Agreement, <br>
          Privacy Policy, and Cookie Policy. 
    </h6>
    <input type="submit" class="submitSignUp" value="Sign Up">
  </div>
  <footer> Made by Viviana, Camila & Paula</footer>

</form>`

  const signUp_container = document.createElement('div');
  signUp_container.innerHTML = viewSignUp;

  const formSignUp = signUp_container.querySelector('#signUpForm');
  formSignUp.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    SignUpUser(email, password)
      .then(() => { changeView('#/post') })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage)
      });
  })
  return signUp_container;
}
