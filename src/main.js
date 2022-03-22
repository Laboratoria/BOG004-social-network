import { changeView } from './lib/viewController.js';

const init = () => {
    window.addEventListener('hashchange', () => changeView(window.location.hash))
}
window.addEventListener('load', init)


