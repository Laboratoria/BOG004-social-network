export default () => {
  const viewDifference = `
    <h2 class= 'text-center'> ¡Oh no! algo salio mal</h2>
    `;

  const divElement = document.createElement("div");
  divElement.innerHTML = viewDifference;
  return divElement;
};
