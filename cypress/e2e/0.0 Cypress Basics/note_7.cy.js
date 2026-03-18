/// <reference types="cypress" />
// test hooks in cypress
// then() will return instance of the dom it will be JQuery object
beforeEach("open web applications", () => {
  cy.visit("/");
  cy.contains("Forms").click();
  cy.contains("Form Layouts").click();
});
describe("group 1", () => {
  it.only("Reusing Locators in Cypress: ", () => {
    // (0) via using variable:
    const email1 = cy.get("#inputEmail1");
    email1.parents("form").find("button").click();
    // (1) via using Alias:
    cy.get("#inputEmail1").as("darrehanrasool");
    cy.get("@darrehanrasool").parents("form").find("button").click();
    // (2) via using then():
    cy.get("#inputEmail1").then((rehan) => {
      cy.wrap(rehan.parents("form").find("button").click());
      cy.wrap(rehan.parents("form").find("button").click());
      // we can wrap any objects in order to call cypress methods
      cy.wrap("hello")
        .should("equal", "hello")
        .then((dar) => {
          return dar;
        });
      // second way to return values via aliasing.
      // these variables are globally avalaible.
      cy.get(rehan).as("variable_1");
    });
    cy.get("@variable_1").click();
  });
});
