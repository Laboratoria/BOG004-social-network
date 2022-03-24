export default () => {
  const divError = document.createElement('div');
  divError.setAttribute('class', 'container-div-404');
  const viewError = `
      <main>
      <div class="main__div--tittle">
      <p>Ups lo siento!</p>
      </div>
      </main>
      `;
  divError.innerHTML = viewError;
  return divError;
};
