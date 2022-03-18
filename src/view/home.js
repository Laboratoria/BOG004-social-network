import { changeView } from '../view-controler/index.js'

export const home = () => {
    const viewHomeHtml = document.getElementById("root");
    const view = `
        <div id="viewHome">
            <a href="#/">Home</a>
            <h1>home</h1>
            <button id="btn-register">Registrar</button>
        </div>
    `;
    viewHomeHtml.innerHTML = view;
    document.querySelector('#btn-register').addEventListener('click', () => {
        changeView('#/register');
    })
    return viewHomeHtml;
};