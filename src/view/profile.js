export default () => {
  const viewProfile = `
    <h2 class= 'text-center'> Aquí entrarás proximamente tu perfil</h2>
    `;

  const divElement = document.createElement("div");
  divElement.innerHTML = viewProfile;
  return divElement;
};
