export default () => {
    const viewSignUp = `
    <h1 class = "text-align: "right"></h1>
    <div class="signUpForm">
        <div class="signUp">
          <input id="firstName" type="text" class="input-blanco" placeholder="First Name" required>
         </div>
        <div class="signUp">
          <input id="lastName" type="text" class="input-blanco" placeholder="Last Name" required>
        </div>
          <input id="email" type="email" class="input-blanco" placeholder="Enter your email" required>
        </div>
        <div class="signUp">
          <input id="password" type="password" class="input-blanco" placeholder="Enter your password" required>
        </div> 
        <div class="signUp">
          <button id="logIn" class="btn-naranjo"> Sign Up</button><div class="signUp">
        </div>   
    </div> 
         `

    const divElement = document.createElement("div")
    divElement.classList.add("position")
    divElement.innerHTML = viewSignUp;

    return divElement;
}