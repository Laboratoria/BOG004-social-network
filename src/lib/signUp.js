import { signingUp } from "../firebase.js"
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
          <input id="usersEmail" type="email" class="input-blanco" placeholder="Enter your email" required>
        </div>
        <div class="signUp">
          <input id="userPassword" type="password" class="input-blanco" placeholder="Enter your password" required>
        </div> 
        <div class="signUp">
          <button class= "signUpBtn" id="signUpBttn" class="btn-naranjo"> Sign Up</button><div class="signUp">
        </div>   
    </div> 
         `

    const divElement = document.createElement("div")
    divElement.innerHTML = viewSignUp;
    
    divElement.querySelector('#signUpBttn').addEventListener('click', () => {
      const nameFirst = document.getElementById('firstName').value;
      const nameLast = document.getElementById('lastName').value;
      const email = document.getElementById('usersEmail').value;
      const password = document.getElementById('userPassword').value;

      signingUp(nameFirst, nameLast, email, password);
    })

    return divElement;
}