import { googleSignWithPopup } from './firebase.js';
import { changeView } from './viewController.js';
export default () => {
    const viewButtons = `
<div class="initView" id="initView">
 <figure>
        <img class="Icono" src="images/iPhone 13/Logo.png" alt="Icono"><br>
        <img class="Nave" src="./images/Nave.png" alt="Nave">
</figure>
    <h1 class="branding">EDUCATION IS THE FUTURE <h1><br>
    <a class="signUp" href="#/signUp">SIGN UP</a><br>
    <a class="buttonGoogle"  id="loginGoogle">CONTINUE WITH GOOGLE</a> <br>
    <a class="signIn" href="#/signIn">SIGN IN</a>
</div>
<footer> Made by Viviana, Camila & Paula</footer>
`
    const sectionElement = document.createElement('div')
    sectionElement.innerHTML = viewButtons;

    const googleButton = sectionElement.querySelector('#loginGoogle');
    googleButton.addEventListener('click', (e) => {

        googleSignWithPopup()
            .then(() => { changeView('#/post') })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorMessage)
            })

    })
    return sectionElement;
}
