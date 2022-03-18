import { components } from "../view/components.js";

const changeView = (route) => {
    switch (route) {
        case '#/':
            components.home();
            break;

        case '#/register':
            components.register();
            break;

        case '#/login':
            components.login();
            break;    
        default:
            break;
    }
    console.log(route);
}

export { changeView }