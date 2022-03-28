import { googleSignWithPopup } from './firebase.js';
// eslint-disable-next-line import/no-cycle
import { changeView } from './viewController.js';

export default () => {
  const viewButtons = `
<div class="initView" id="initView">
 <figure>
        <img class="Nave" src="./images/Nave2.png" alt="Nave">
</figure>
    <h1 class="branding">EDUCATION IS THE FUTURE <h1><br>
    <a href="#/signUp"><button class="signUp" >SIGN UP</button></a><br>
    <a id="loginGoogle"><button class="buttonGoogle" >CONTINUE WITH GOOGLE</button></a> <br>
    <a href="#/signIn"><button class="signIn"" >SIGN IN</button></a>
</div>
`;
  const sectionElement = document.createElement('div');
  sectionElement.classList = 'divButtons';
  sectionElement.innerHTML = viewButtons;

  const googleButton = sectionElement.querySelector('#loginGoogle');
  googleButton.addEventListener('click', (e) => {
    googleSignWithPopup()
      .then(() => { changeView('#/post'); })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
      });
  });
  return sectionElement;
};
