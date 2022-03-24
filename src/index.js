import Register from './lib/views/register.js';
import Login from './lib/views/login.js';
import Daily from './lib/views/daily.js';
import Error404 from './lib/views/404.js';

const components = {
  register: Register,
  login: Login,
  daily: Daily,
  error404: Error404,
};

export { components };
