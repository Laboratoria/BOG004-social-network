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
        case '#/login':
            { return sectionMain.appendChild(components.login()); }
        case '#/profile':
            { return sectionMain.appendChild(components.profile()); }
        case '#/feed':
            { return sectionMain.appendChild(components.feed()); }
        case '#/interest':
            { return sectionMain.appendChild(components.interest()); }
        default:
            return sectionMain.appendChild(components.different())
    }
};
export { changeView }