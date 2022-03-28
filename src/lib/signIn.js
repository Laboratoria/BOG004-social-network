import { userSignIn, googleLogIn } from '../firebase.js';

export default () => {
  const viewSignIn = `
  <div class="container">
    
        <label for="umail"><b>UserEmail</b></label>
            <input type="text" id="userMail" placeholder="Enter email" name="uname" required>

        <label for="psw"><b>Password</b></label>
            <input type="password" id="userPass" placeholder="Enter Password" name="psw" required>

        <button type="submit" id="loginSignIn">Login</button>
            <label>
        <input type="checkbox" checked="checked" name="remember"> Remember me
            </label>
        <button type="submit" id="loginWithG">Login With Google</button>
            <label>
  </div>

  <div class="container" style="background-color:#f1f1f1">
        <span class="psw">Forgot <a href="#">password?</a></span>
  </div>

  <div class="imgcontainer">
    <img src="./img/pic-of-dog.png" width="200" height="200" style="padding:55px" alt="Avatar" class="avatar">
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
