export default () => {
    const viewButtons = `
<div class="initView" id="initView">
 <figure>
        <img class="Icono" src="images/iPhone 13/Logo.png" alt="Icono"><br>
        <img class="Nave" src="./images/Nave.png" alt="Nave">
</figure>
    <h1 class="branding">EDUCATION IS THE FUTURE <h1><br>
    <a class="signUp" href="#/signUp">SIGN UP</a><br>
    <a class="buttonGoogle" href="#/buttonGoogle">CONTINUE WITH GOOGLE</a> <br>
    <a class="signIn" href="#/signIn">SIGN IN</a>
</div>
<footer> Made by Viviana, Camila & Paula</footer>
`
    const sectionElement = document.createElement('div')
    sectionElement.innerHTML = viewButtons;

    return sectionElement;
}