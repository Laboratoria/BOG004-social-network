/* eslint-disable import/no-cycle */
import { SignUpUser } from './firebase.js';
import { changeView } from './viewController.js';

export default () => {
  const viewSignUp = ` <form class="signUpForm" id="signUpForm">
  
    <figure>
      <img class="Icono" src="images/iPhone 13/Logo.png" alt="Icono"><br>
    </figure>
    <h1>SIGN UP</h1>
    <input type="text" class="nickname" id="nickname" placeholder="nickname" autocomplete = 'off'><br>
    <input type="email" class="email" id="emailSignUp" placeholder="email" required minlength="8"> <br>
    <input type="password" class="password" id="passwordSignUp" placeholder="password"><br>
    <h6>  By clicking Agree & Join, you agree to the  User Agreement, <br>
          Privacy Policy, and Cookie Policy. 
    </h6>
    <input type="submit" class="submitSignUp" value="Sign Up"><br>
    <span class = 'errorZ'></span>
</form>`;

  const signUpContainer = document.createElement('div');
  signUpContainer.innerHTML = viewSignUp;

  const formSignUp = signUpContainer.querySelector('#signUpForm');
  formSignUp.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = signUpContainer.querySelector('#emailSignUp').value;
    const password = signUpContainer.querySelector('#passwordSignUp').value;
    // const nickname = signUpContainer.querySelector('#nickname').value;
    const errorM = signUpContainer.querySelector('.errorZ');
    const regexDominio = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.([a-zA-Z]{2,4})+$/;

    if (regexDominio.test(email)) {
      SignUpUser(email, password)
        .then(() => { changeView('#/signIn'); })
        .catch((error) => {
          const errorCode = error.code;
          if (errorCode) {
            errorM.innerHTML = 'Usuario ya existente';
          }
        });
    } else {
      errorM.innerHTML = 'Correo inválido';
    }
  });
  return signUpContainer;
};
