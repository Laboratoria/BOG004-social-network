// aqui exportaras las funciones que necesites

export const home = () => {
  const template = `
  <img src='image/logo11.png' alt=''>
  <button id="register1">¡REGISTRARTE!</button>
  <button id="login1">INICIAR SESIÓN</button> `;
  const divElement = document.createElement('div');
  divElement.classList.add('view1');
  divElement.innerHTML = template;
  return divElement;
};
