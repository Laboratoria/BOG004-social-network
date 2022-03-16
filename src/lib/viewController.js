import { components } from './components.js';
const changeView = (route) => {
    const container = document.getElementById('container');
    container.innerHTML = '';
    switch (route) {
        case '#/home': { return container.appendChild(components.buttons()) }
            break;
        case '#/signUp': { return container.appendChild(components.upSign()) }
            break;
        default:
            break;
    }
    console.log(route)
}

export { changeView }