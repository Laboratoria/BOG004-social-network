export default () => {
  const viewHomePage = `
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
  
    <img src="./img/home-image.png" alt="Girl-with-dog" width="200" height="200" style="padding:45px">
    <h2 id="hello">Welcome to PetShare</h2>
    <p id="home-textContent">
    PetShare is the foremost social network dedicated to people who love pets.
    Sharing photos and videos of you and your pet, getting advice for healthcare and behavior from our 
    veterinarian partners as well as hilarious cat and dog videos.
    </p>
        `;

  const divElement = document.createElement('div');
  divElement.innerHTML = viewHomePage;

  return divElement;
};
