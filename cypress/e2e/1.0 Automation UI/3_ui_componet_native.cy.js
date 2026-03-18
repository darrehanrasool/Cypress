/// <reference types="cypress" />
// test hooks in cypress
// default drop down
beforeEach("open web application", () => {
  cy.visit("/");
  cy.contains("Modal & Overlays").click();
  cy.contains("Toastr").click();
});
describe("ui component Automation", () => {
  it("Native Drop Dowm", () => {
    cy.contains("div", "Toast type:")
      .find("select")
      .select("info")
      .should("have.value", "info");
  });
});
