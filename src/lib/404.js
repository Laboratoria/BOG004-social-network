export default () => {
  const viewError = `
  <h1>404</h1>
  <h>Page Not Found</h1>;
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
      `;

  const divElement = document.createElement("div");
  divElement.setAttribute("id", "message");
  divElement.innerHTML = viewError;

  return divElement;
};
