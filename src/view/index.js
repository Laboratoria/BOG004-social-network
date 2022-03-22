import home from "./home.js";
import { createFormUser, saveUser } from "./user.js";
import different from "./404.js";




const components = {
    home: home,
    user: { createFormUser, saveUser },
    different: different,
}
 
export {components};