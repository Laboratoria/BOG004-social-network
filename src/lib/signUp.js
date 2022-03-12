import {login} from './firebase.js'


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
    login(email,password)
    console.log('cargando')
  })
  return signUp_container;

  /*const signUpForm = document.getElementById('signUpForm');
  signUpForm.addEventListener('submit', (e) => { hola
    e.preventDefault();
    console.log('cargando')
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    login(email,password)

  })*/
}