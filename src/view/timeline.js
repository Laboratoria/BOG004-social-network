export default () => {
  const viewTimeLine = `
    <h2 class= 'text-center'>¡Bienvenido a tu muro!</h2>
    `;

  const divElement = document.createElement("div");
  divElement.innerHTML = viewTimeLine;
  return divElement;
};
