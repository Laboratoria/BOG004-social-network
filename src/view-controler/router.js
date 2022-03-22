import { components } from "../view/index.js";

const changeView = (hash) => {
    const id = hash.split('/')[1];
    const sectionMain = document.getElementById("container")
    sectionMain.innerHTML = "";
    switch (hash) {
        case '':
        case '#':
        case '#/':
            { return sectionMain.appendChild(components.home()); }
        case '#/createUser':
            {
                sectionMain.appendChild(components.user.createFormUser());
                components.user.saveUser();
            }

        default:
            return sectionMain.appendChild(components.different())
    }
};
export { changeView }