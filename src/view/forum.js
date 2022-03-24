export default () => {
  const viewForum = `
    <h2 class= 'text-center'> Aquí encontrarás un foro para discutir diferentes temas</h2>
    `;

  const divElement = document.createElement("div");
  divElement.innerHTML = viewForum;
  return divElement;
};
