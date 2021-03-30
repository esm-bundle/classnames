describe("@esm-bundle/classnames", () => {
  it("can load the esm bundle without dying", () => {
    return import("../esm/index.js");
  });
});
