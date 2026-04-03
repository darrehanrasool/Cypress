/// <reference types="cypress" />
// test hooks in cypress
// default drop down
beforeEach("open web application", () => {
  cy.visit("/");
  cy.contains("Modal & Overlays").click();
  cy.contains("Toastr").click();
});

afterEach("cleanup", () => {
  console.log("Test Finished");
  cy.clearCookies();
  cy.clearLocalStorage();
});

describe("ui component Automation", () => {
  it.only("Native default Drop Down", () => {
    cy.contains("div", "Toast type:")
      .find("select")
      .select("info")
      .should("have.value", "info");
  });
});
