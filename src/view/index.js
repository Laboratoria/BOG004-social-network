// eslint-disable-next-line import/no-cycle
import home from './home.js';
// eslint-disable-next-line import/no-cycle
import { createFormUser, saveUser } from './register.js';
// eslint-disable-next-line import/no-cycle
import login from './login.js';
import profile from './profile.js';
import feed from './feed.js';
import interest from './interest.js';
import different from './404.js';

const components = {
  Home: home,
  User: { createFormUser, saveUser },
  Login: login,
  Profile: profile,
  Feed: feed,
  Interest: interest,
  Different: different,
};

export { components };
