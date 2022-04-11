import { signingUp } from './firebase.js';

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

      <label for="fName"><b>User Name</b></label>
          <input id="firstName" type="text" class="input-blanco" placeholder="First Name" required>
          <br>
      <label for="lName"><b>Last Name</b></label>
          <input id="lastName" type="text" class="input-blanco" placeholder="Last Name" required>
          <br>
      <label for="userEm"><b>User Email</b></label>
          <input id="usersEmail" type="email" class="input-blanco" placeholder="Enter your email">
          <br>
      <label for="uPw"><b>Password</b></label>
          <input id="userPassword" type="password" class="input-blanco" placeholder="Enter your password">
          <br>
      
          <button type= "submit" id="signUpBttn">Sign Up</button>
          <br>
    </div> 
    <div class="imgContainer-">
    <img src="./img/signUp.png" alt="Avatar" class="avatarSignUp">
  </div>
  </section>
         `;

  const divElement = document.createElement('div');
  divElement.innerHTML = viewSignUp;

  divElement.querySelector('#signUpBttn').addEventListener('click', () => {
    const nameFirst = document.getElementById('firstName').value;
    const nameLast = document.getElementById('lastName').value;
    const email = document.getElementById('usersEmail').value;
    const password = document.getElementById('userPassword').value;

    signingUp(nameFirst, nameLast, email, password);
  });

  return divElement;
};

export { signingUp };
