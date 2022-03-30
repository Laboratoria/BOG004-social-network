import { viewSignIn } from "signIn.js";

describe("Ingreso a la página Petshare", () => {
  it("is a function", () => {
    expect(typeof viewSignIn).toBe("function");
  });
});
