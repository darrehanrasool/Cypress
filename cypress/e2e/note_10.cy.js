/// <reference types="cypress" />
//test hooks in cypress
beforeEach("open web application", () => {
  cy.visit("/");
  cy.contains("Forms").click();
  cy.contains("Form Layout").click();
});
describe("Time outs", () => {
  it.only("first test 1", () => {});
});
