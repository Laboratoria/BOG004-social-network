import { newRegister, loginGoogle } from '../firebaseController.js';

export default () => {
  const divRegister = document.createElement('div');
  divRegister.setAttribute('class', 'container-div-register');
  const viewRegister = `
  <main>
  <div class="main__div--tittle"></div>
  <div class= "main__div--container">
      <h2 class="welcome-wizards"></h2>

      <div class="main__div--login-register">
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

      <p class="p_join"> <b>REVELIO<b> The Daily Prophet</p>
      <button class="join"> Join </button>
      <div class="div-or">
      <p class="or">or</p>
      </div>
      <button type="button" id="googleButton" class="continue-with-google"></button>
      <p class="alohomora">Already a member? ALOHOMORA</p>
      <a href='#/login'><button class="Login">Login</button></a>
  </div>
  
</main>
  `;
  divRegister.innerHTML = viewRegister;

  const join = divRegister.querySelector('.join');
  join.addEventListener('click', (e) => {
    e.preventDefault();
    // console.log('click join');

    const formNewRegister = document.querySelector('#formNewRegister');
    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;
    const errorMessageJoin = document.querySelector('#errorMessageJoin');
    errorMessageJoin.innerHTML = '';

    if (name !== '') {
      newRegister(email, password, name)
        .then(() => {
          // const user = userCredential.user;

          document.querySelector('#modalMessage').style.display = 'block';
          document.querySelector('#textModal').innerHTML = 'WELCOME TO THE DAILY PROPHET';
          setTimeout(() => {
            document.querySelector('#modalMessage').style.display = 'none';
            window.location.hash = '#/daily';
          }, 4000);
          formNewRegister.reset();
        })
        .catch((error) => {
          const errorCode = error.code;
          //   const errorMessage = error.message;
          //   console.log(errorCode, errorMessage);
          switch (errorCode) {
            case 'auth/invalid-email':
              errorMessageJoin.innerHTML = '❌ Invalid Email';
              break;
            case 'auth/weak-password':
              errorMessageJoin.innerHTML = '⚠️ The password must contain minimum six characters';
              break;
            case 'auth/email-already-in-use':
              errorMessageJoin.innerHTML = '⚠️ Your email is already registered';
              break;
            default:
              errorMessageJoin.innerHTML = '⚠️ Fill in all the fields';
              break;
          }
        });
    } else {
      errorMessageJoin.innerHTML = '⚠️ Name is a require field';
    }
  });

  const googleBotton = divRegister.querySelector('#googleButton');
  googleBotton.addEventListener('click', (e) => {
    e.preventDefault();
    loginGoogle()
      .then(() => {
        window.location.hash = '#/daily';
      });
  });
  return divRegister;
};
