import { components } from './components.js'


const changeView = (route) => {
    const container = document.getElementById('container');
    container.innerHTML = '';
    window.location.hash = route;
    switch (route) {
        case '#/home': { return container.appendChild(components.buttons()) }
        case '#/signUp': { return container.appendChild(components.upSign()) }
        case '#/signIn': { return container.appendChild(components.inSign()) }
        case '#/post': { return container.appendChild(components.post()) }
        default:
            break;
    }
    console.log(route)
}

export { changeView }