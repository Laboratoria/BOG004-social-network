import home from './home.js';
import { createFormUser, saveUser } from './user.js';
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
