// eslint-disable-next-line import/no-cycle
import { SignUpUser } from './firebase.js';
// eslint-disable-next-line import/no-cycle
import { changeView } from './viewController.js';

export default () => {
  const viewSignUp = ` <form class="signUpForm" id="signUpForm">
  
    <figure>
      <img class='Icono' src='images/iPhone 13/Logo.png' alt='Icono'><br>
    </figure>
    <h1>SIGN UP</h1>
    <input type="text" class="nickname" id="nickname" placeholder="nickname" autocomplete = 'off'><br>
    <input type="email" class="email" id="email" placeholder="email" required minlength="8"> <br>
    <span id="emailError"></span>
    <input type="password" class="password" id="password" placeholder="password"><br>
    <span id="passwordError"></span>
    <h6>  By clicking Agree & Join, you agree to the  User Agreement, <br>
          Privacy Policy, and Cookie Policy. 
    </h6>
    <input type="submit" class="submitSignUp" value="Sign Up">

</form>`;

  const signUpContainer = document.createElement('div');
  signUpContainer.innerHTML = viewSignUp;

  const formSignUp = signUpContainer.querySelector('#signUpForm');
  formSignUp.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&#.$($)$-$_])[A-Za-z\d$@$!%*?&#.$($)$-$_]{8,15}$/;
    if (!email.includes('@') || !email.includes('.')) {
      emailError.innerHTML = 'Debe incluir un \'@\' y un \'.\'';
    }
    if (regex.test(password)) {
      SignUpUser(email, password)
        .then(() => { changeView('#/post'); })
        .catch((error) => {
        // eslint-disable-next-line no-unused-vars
          const errorCode = error.code;
          const errorMessage = error.message;
          alert(errorMessage);
        });
    } else {
      passwordError.innerHTML = 'La contraseña debe tener de 8 a 15 caracteres, al menos una mayúscula, una minúscula, un caracter especial y no debe tener espacios';
    }
  });
  return signUpContainer;
};
