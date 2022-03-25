//* EN ESTA PESTAÑA PONDREMOS TODO LO QUE IRA EN EL MURO *//


export default () => {
  const divDaily = document.createElement('div');
  divDaily.setAttribute('class', 'container-div-daily');
  const viewDaily = `
    <main>
    <div class="main__div--tittle-daily">
        <img src="./img/title.png">
    </div>
    </main>
    `;
  divDaily.innerHTML = viewDaily;
  return divDaily;
};


