import { components } from './components.js'


const changeView = (route) => {
    const container = document.getElementById('container');
    container.innerHTML = '';
    switch (route) {
        case '#/signUp': {return container.appendChild(components.upSign())}
        case '#/signIn': {return container.appendChild(components.inSign())}
        case '#/home': {return container.appendChild(components.Home())}
        default:
            break;
    }
    console.log(route)
}

export { changeView }