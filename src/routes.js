import registro from './pages/registro.js';
import home from './pages/home.js';
import post from './pages/post.js';
import login from './pages/login.js';
import profile from './pages/profile.js';
import Router from './router.js';

export const routes = [home, registro, post, login, profile]; // Array de rutas
export const router = new Router(routes); // instanciamos el router
