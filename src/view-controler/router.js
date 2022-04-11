import { components } from "../view/index.js";

const changeView = (route) => {
window.location.hash=route;
console.log(route)
  const container = document.getElementById("container");
  container.innerHTML = "";
  switch (route) {
    case "#/": {
      return container.appendChild(components.Login());
    }
    case "#/register": {
      
      return container.appendChild(components.register());
    }
    case "#/timeLine": {
        return container.appendChild(components.timeline());
      }
      case "#/profile": {
        return container.appendChild(components.profile());
      }
      case "#/forum": {
        return container.appendChild(components.forum());
      }
      case "#/difference404": {
        return container.appendChild(components.difference());
      }
    default:
      break;
  }

  console.log(route);
};
export { changeView };
