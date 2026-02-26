/// <reference types="cypress" />
//test hooks in cypress
beforeEach("open web applications", () => {
  cy.visit("/");
  cy.contains("Forms").click();
  cy.contains("Form Layouts").click();
});
describe("first group 1", () => {
  it.only("first test 1", () => {
    cy.find();
  });
});
