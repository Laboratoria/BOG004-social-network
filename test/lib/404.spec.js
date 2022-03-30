import { viewError } from "404.js";

describe("Visualización del error 404", () => {
  it("is a function", () => {
    expect(typeof viewError).toBe("function");
  });
});
