import { changeView } from "../src/view-controler/router.js";

jest.mock("../src/view-controler/firebase.js");

const pintarLogin = () => {
  const divElement = document.createElement("div");
  const viewLogin = `<p>template login</p>`;
  divElement.innerHTML = viewLogin;
  return divElement;
};

const pintarRegister = () => {
  const divElement = document.createElement("div");
  const viewRegister = `<p>template register</p>`;
  divElement.innerHTML = viewRegister;
  return divElement;
};

const pintarTimeline = () => {
  const divElement = document.createElement("div");
  const viewTimeLine = `<p>template timeLine</p>`;
  divElement.innerHTML = viewTimeLine;
  return divElement;
};

const componentsTest = {
  Login: pintarLogin,
  register: pintarRegister,
  timeline: pintarTimeline,
};

describe("changeView", () => {
  it("debería pintar el template Login cuando la ruta sea #/", () => {
    document.body.innerHTML = '<section id="container"></section>';
    changeView("#/", componentsTest);
    expect(document.getElementById("container").textContent).toEqual(
      "template login"
    );
  });
});

describe("changeView", () => {
  it("debería pintar el template register cuando la ruta sea #/register", () => {
    document.body.innerHTML = '<section id="container"></section>';
    changeView("#/register", componentsTest);
    expect(document.getElementById("container").textContent).toEqual(
      "template register"
    );
  });
});

describe("changeView", () => {
  it("debería pintar el template timeline cuando la ruta sea #/timeLine", () => {
    document.body.innerHTML = '<section id="container"></section>';
    changeView("#/timeLine", componentsTest);
    expect(document.getElementById("container").textContent).toEqual(
      "template timeLine"
    );
  });
});
