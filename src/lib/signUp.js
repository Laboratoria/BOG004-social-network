import { signingUp } from "../firebase.js";

export default () => {
  const viewSignUp = `
      <input id="toggle" type="checkbox"></input>  
      <label for="toggle" class="hamburger">
          <div class="top-bun"></div>
          <div class="meat"></div>
          <div class="bottom-bun"></div>
        </label>
        <div class="nav">
          <div class="nav-wrapper">
            <nav>
              <ul class="list-bar" style="list-style-type: none;">
                <li id="homie"><a href="#/" style="color: white;" onmouseover="this.style.color='rgb(177, 240, 76)';" onmouseout="this.style.color='white';" >PetShare</a>
                  </li>
                <li id="in"><a href="#/signIn" style="color: white;" onmouseover="this.style.color='rgb(177, 240, 76)';" onmouseout="this.style.color='white';" >Sign In</a>
                  </li>
                <li id="up"><a href="#/signUp" style="color: white;" onmouseover="this.style.color='rgb(177, 240, 76)';" onmouseout="this.style.color='white';" >Sign Up</a>
                  </li>
              </ul>
            </nav>
          </div>
        </div> 
  <section>
    <h1 class = "text-align: "right"></h1>
    <div class="signUpForm">
        <div class="signUp">
          <input id="firstName" type="text" class="input-blanco" placeholder="First Name" required>
         </div>
        <div class="signUp">
          <input id="lastName" type="text" class="input-blanco" placeholder="Last Name" required>
        </div>
          <input id="usersEmail" type="email" class="input-blanco" placeholder="Enter your email">
        </div>
        <div class="signUp">
          <input id="userPassword" type="password" class="input-blanco" placeholder="Enter your password">
        </div> 
        <div class="signUp">
          <button type= "submit" id="signUpBttn">Sign Up</button></div class="signUp">
        </>   
    </div> 
  </section>
         `;

  const divElement = document.createElement("div");
  divElement.innerHTML = viewSignUp;

  divElement.querySelector("#signUpBttn").addEventListener("click", () => {
    const nameFirst = document.getElementById("firstName").value;
    const nameLast = document.getElementById("lastName").value;
    const email = document.getElementById("usersEmail").value;
    const password = document.getElementById("userPassword").value;

    signingUp(nameFirst, nameLast, email, password);
  });

  return divElement;
};
