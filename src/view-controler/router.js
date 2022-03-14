import { components } from "../view/index.js";


const changeView = (hash) =>{
 const id =hash.split('/')[1];
 const sectionMain = document.getElementById("container")
 sectionMain.innerHTML="";
switch (hash) {
    case '':
    case '#':
    case '#/':
    { return sectionMain.appendChild(components.home()); }
    case '#/createUser': 
    { return sectionMain.appendChild(components.createUser()); }

    default:
        return sectionMain.appendChild(components.different())
        
   
}
};
export {changeView}