import home from "./home.js";
import { createFormUser, saveUser } from "./user.js";
import login from "./login.js";
import profile from "./profile.js";
import feed from "./feed.js";
import interest from "./interest.js";
import different from "./404.js";

const components = {
    home: home,
    user: { createFormUser, saveUser },
    login: login,
    profile: profile,
    feed: feed,
    interest: interest,
    different: different,
}
 
export {components};