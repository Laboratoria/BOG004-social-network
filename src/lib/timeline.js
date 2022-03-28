import { close } from '../firebase.js';

export default () => {
  const viewTimeline = ` 
    <button type="button" id="userLogOut">Log Out</button>`;

  const divElement = document.createElement('div');
  divElement.innerHTML = viewTimeline;

  divElement.querySelector('#userLogOut').addEventListener('click', () => {
    close();
  });
  return divElement;
};
