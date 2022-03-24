export default () => {
  const viewRegister = `
    <h2 class= 'text-center'> Aquí te puedes registrar en ¡Hi,baby! </h2>
    `;
  const divElement = document.createElement("div");
  divElement.innerHTML = viewRegister;
  return divElement;
};
