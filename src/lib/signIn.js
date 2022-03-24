export default () => {
    const viewSignIn =  `
    <h1 class = "text-align: "right"></h1>
    <div class="signInForm">
        <div class="signIn">
            <input id="email" type="email" class="input-blanco" placeholder="Enter your email" required>
        </div>
        <div class="signIn">
            <input id="password" type="password" class="input-blanco" placeholder="Enter your password" required>
        </div>
        <div class="signIn">
            <button id="logIn" class="btnLogIn"> Sign In </button>
            
        </div>
        <div>
            <p class="center-text">
                <a href="" id="recoverBtn" class="recover-pass">Forgot your password?</a>
            </p>
        </div>
    </div> 
         `

    const divElement = document.createElement("div")
    divElement.classList.add("position")
    divElement.innerHTML = viewSignIn;

    return divElement;
}