//* En esta pestaña ira la segunda vista que tiene la parte de loguearse a la SN *//
export default () => {
  const divRegister = document.createElement('div');
  divRegister.setAttribute('class', 'container-div-daily');
  const viewRegister = `
    <main>
    <div class="main__div--tittle">
        <img src="./img/title.png">
    </div>
    </main>
`;
  divRegister.innerHTML = viewRegister;
  return divRegister;
};
