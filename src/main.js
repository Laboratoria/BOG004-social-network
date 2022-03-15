// //import {register} from "./lib/firebaseController.js"

import register from './lib/views/register.js';
import { changeRoute } from './lib/router.js';

const init = () => {
    document.getElementById("container").appendChild(register());
    changeRoute(window.location.hash);
    window.addEventListener('hashchange', () => {
        changeRoute(window.location.hash);
    });
};
window.addEventListener('load', init);
