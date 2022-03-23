import { components } from "../view/index.js";


const changeView = (hash) => {
    const id = hash.split('/')[1];
    const sectionMain = document.getElementById("container")
    sectionMain.innerHTML = "";
    switch (hash) {
        case '':
        case '#':
        case '#/':
            {
                if (localStorage.getItem("token")) {
                    return sectionMain.appendChild(components.feed());
                } else {
                    return sectionMain.appendChild(components.home());
                }
            }
        case '#/createUser':
            {
                sectionMain.appendChild(components.user.createFormUser());
                return components.user.saveUser();
            }
        case '#/login':
            { return sectionMain.appendChild(components.login()); }
        case '#/profile':
            {
                if (localStorage.getItem("token")) {
                    return sectionMain.appendChild(components.profile());
                } else {
                    return sectionMain.appendChild(components.home());
                }
            }
        case '#/feed':
            {
                if (localStorage.getItem("token")) {
                    return sectionMain.appendChild(components.feed());
                } else {
                    return sectionMain.appendChild(components.home());
                }
            }
        case '#/interest':
            {
                if (localStorage.getItem("token")) {
                    return sectionMain.appendChild(components.interest());
                } else {
                    return sectionMain.appendChild(components.home());
                }
            }
        case '#/cerrar-sesion':
            {
                console.log("usuario cerró sesion");
                localStorage.removeItem("token");
                localStorage.removeItem("name");
                return sectionMain.appendChild(components.home());
            }
        default:
            return sectionMain.appendChild(components.different())


    }
};
export { changeView }