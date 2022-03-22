import { components } from "../view/index.js";


const changeView = (hash) =>{
//  const id =hash.split('/')[1];
 const container = document.getElementById("container")
 container.innerHTML="";
switch (hash) {
    case '':
    case '#':
    case '#/':
    { return container.appendChild(components.home()); }
    case '#/createUser': 
    { return container.appendChild(components.createUser()); }
    case '#/login':
    { return container.appendChild(components.login()); }
    case '#/profile': 
    { return container.appendChild(components.profile()); }
    case '#/feed': 
    { return container.appendChild(components.feed()); }
    case '#/interest': 
    { return container.appendChild(components.interest()); }
    default:
        return container.appendChild(components.different())
        
   
}
};
export {changeView}