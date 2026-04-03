/// <reference types="cypress" />
// test hooks in cypress.
// then() will return instance of the dom it will be JQuery object.
// we can wrap any objects in order to call cypress methods.
// these variables are globally avalaible.
beforeEach("open web applications", () => {
  cy.visit("/");
  cy.contains("Forms").click();
  cy.contains("Form Layouts").click();
});

afterEach("cleanup", () => {
  console.log("Test Finished");
  cy.clearCookies();
  cy.clearLocalStorage();
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
      cy.wrap("darrehanrasool")
        .should("equal", "darrehanrasool")
        .then((value) => {
          return value;
        });
      cy.get(rehan).as("variable_1");
    });

    cy.get("@variable_1").click();
  });
});
