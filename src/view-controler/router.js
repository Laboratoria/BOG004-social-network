import { components } from "../view/index.js";

const changeView = (route, template= components) => {
window.location.hash=route;
  const container = document.getElementById("container");
  container.innerHTML = "";
  switch (route) {
    case "#/": {
      return container.appendChild(template.Login());
    }
    case "#/register": {
  return container.appendChild(template.register());
    }
    case "#/timeLine": {
        return container.appendChild(template.timeline());
      }
      case "#/profile": {
         return container.appendChild(template.profile());
      }
      case "#/forum": {
        return container.appendChild(template.forum());
      }
      case "#/difference404": {
      return container.appendChild(template.difference());
      }
    default:
      break;
  }
  console.log(route);
};
export { changeView };
