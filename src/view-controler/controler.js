import { components } from "../view/components.js";

const changeView = (route) => {
  switch (route) {
    case "#/":
      components.hero();
      break;
    case "#/register":
      components.register();
      break;
    case "#/login":
      components.login();
      break;
    case "#/feed":
      components.feed();
      break;
    default:
      components.hero();
      break;
  }
};

export { changeView };
