/// <reference types="cypress" />
// test hooks in cypress
beforeEach("open web application", () => {
  cy.visit("/");
  cy.contains("Forms").click();
  cy.contains("Form Layout").click();
});
describe("ui component Automation", () => {
  it.only("Check Box buttons", () => {});
});
