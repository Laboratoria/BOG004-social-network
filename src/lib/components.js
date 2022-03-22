/* eslint-disable import/no-cycle */
import SignUp from './signUp.js';
import SignIn from './signIn.js';
import post from './post.js';
import buttons from './buttons.js';

const components = {
  buttons,
  SignUp,
  SignIn,
  post,
};

export { components };
