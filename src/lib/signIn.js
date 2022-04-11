import { userSignIn, googleLogIn } from './firebase.js';

export default () => {
  const viewSignIn = `
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
  <div class="containerOne">
    
        <label for="umail"><b>User Email</b></label>
            <input type="email" id="userMail" placeholder="Enter email" name="uname" required>
            <br>

        <label for="psw"><b>Password</b></label>
            <input type="password" id="userPass" placeholder="Enter Password" name="psw" required>
            <br>

        <button type="submit" id="loginSignIn">Login</button>
            <label>
            <br>
        <input type="checkbox" checked="checked" name="remember"> Remember me
            </label>
            <br>
        <button type="submit" id="loginWithG">Login With Google</button>
            <label>
            <br>
  </div>

  <div class="containerTwo">
        <span class="psw">Forgot <href="#" id="passwordLink" >password?</href=></span>
  </div>

  <div class="imgcontainer">
    <img src="./img/SignIn.png" alt="Avatar" class="imgSignIn">
  </div>
    </form> `;

  const divElement = document.createElement('div');
  divElement.innerHTML = viewSignIn;

  divElement.querySelector('#loginSignIn').addEventListener('click', () => {
    const usersEmail = document.getElementById('userMail').value;
    const usersPassword = document.getElementById('userPass').value;

    userSignIn(usersEmail, usersPassword);
  });

  divElement.querySelector('#loginWithG').addEventListener('click', () => {
    googleLogIn();
  });
  return divElement;
};

export { userSignIn, googleLogIn };
