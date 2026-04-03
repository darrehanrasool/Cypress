/// <reference types="cypress" />
// test hooks in cypress
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
  it.only("Check Box buttons", () => {
    cy.get('[type="checkbox"]').check({ force: true });
    cy.get('[type="checkbox"]').should("be.checked");
    cy.get('[type="checkbox"]').uncheck({ force: true });
    cy.get('[type="checkbox"]').should("not.be.checked");
  });
});
