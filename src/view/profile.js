export default () => {
  const viewProfile = `
    <h2 class= 'text-center'> Aquí entrarás proximamente tu perfil</h2>
    
    <ul>
    <li class="menu-two">
      <a class="menu-three" href="#/timeLine">TimeLine</a>
    </li>
    <li class="menu-two">
      <a class="menu-three" href="#/profile">Profile</a>
    </li>
    <li class="menu-two">
      <a class="menu-three" href="#/forum">Forum</a>
    </li>
    <li class="menu-two">
      <a class="menu-three" href="#/difference404">404</a>
    </li>
    <ul>

    `;

  const divElement = document.createElement("div");
  divElement.innerHTML = viewProfile;
  return divElement;
};
