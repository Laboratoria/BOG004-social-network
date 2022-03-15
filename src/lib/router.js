// importamos todas las vistas, llamamos los templates y exportamos el cambio de ruta
import Register from "./views/register.js"
// import {login} from "./lib/views/login.js";
// import {daily} from "./lib/views/daily.js"

const showTemplate =(hash)=> {
    const containerRoot = document.getElementById("container");
    containerRoot.innerHTML = "";

    switch (hash){
        case "":
        containerRoot.appendChild(Register());
        break;
        default: containerRoot.innerHTML = "Oops Error 404";       
    }

};
export const changeRoute = (hash) =>{
    if (hash === "#/Login"){
        return showTemplate (hash);
    }
    return showTemplate(hash);
}
