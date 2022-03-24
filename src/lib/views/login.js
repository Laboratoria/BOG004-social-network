//* En esta pestaña ira la segunda vista que tiene la parte de loguearse a la SN *//
export default () => {
  const divLogin = document.createElement('div');
  divLogin.setAttribute('class', 'container-div-Login');
  const viewLogin = `
    <main>
    <div class="main__div--tittle">
        <p>Esto es Login</p>
    </div>
    </main>
`;
  divLogin.innerHTML = viewLogin;
  return divLogin;
};
