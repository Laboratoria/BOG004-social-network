import {SignUpUser} from './firebase.js';
import { changeView } from './viewController.js';

export default () => {
    const viewSignUp = `<form id="signUpForm">
    <input type="email" id="email" placeholder="email">
    <input type="password" id="password" placeholder="password">
    <input type="submit" value="Sign Up">
    

  </form>`

  const signUp_container = document.createElement('div');
  signUp_container.innerHTML = viewSignUp;
  
  const formSignUp = signUp_container.querySelector('#signUpForm');
  formSignUp.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    SignUpUser(email,password)
        .then(()=> {changeView('#/home')} )
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          alert(errorMessage)
        });
  })
  return signUp_container;
}