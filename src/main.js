import { changeView } from './lib/viewController.js'; //C
import { saveTask } from './lib/index.js';

const init = () => {
    
    window.addEventListener('hashchange', () => changeView(window.location.hash) )
}

window.addEventListener('load', init)
