import {SignInUser,observer} from './firebase.js';

export default () => {
    const viewSignIn = `
    <h4>Si ya estas registrado, ingresa tu correo y contraseña</h4>
    <form id="signInForm">
    <input type="email" id="email" placeholder="email">
    <input type="password" id="password" placeholder="password">
    <input type="submit" value="Sign in">
    

  </form>`

  const signIn_container = document.createElement('div');
  signIn_container.innerHTML = viewSignIn;
  
  const formSignIn = signIn_container.querySelector('#signInForm');
  formSignIn.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    SignInUser(email,password)
    observer();
    
  })
  return signIn_container;
}