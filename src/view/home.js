//import { authenticate } from "../view-controler/firebase.js";

export default () => {
  const viewHome = `
    <h2 class= 'text-center'>¡Welcome, ¡Hi,baby!</h2>
    `;

  const divElement = document.createElement("div");
  divElement.innerHTML = viewHome;
  return divElement;
};
