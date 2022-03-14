import { components } from './components.js'
//C
const changeView = (route) => {
    const container = document.getElementById('container');
    container.innerHTML = '';
    switch (route) {
        case '#/signUp': {return container.appendChild(components.upSign())}
        default:
            break;
    }
    console.log(route)
}

export { changeView }