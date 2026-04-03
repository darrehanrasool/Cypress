/// <reference types="cypress" />
// test hooks in cypress
beforeEach("open web application", () => {
  cy.visit("/");
  cy.contains("Forms").click();
  cy.contains("Form Layouts").click();
});

afterEach("cleanup", () => {
  console.log("Test Finished");
  cy.clearCookies();
  cy.clearLocalStorage();
});

describe("cypress chaining concept", () => {
  it.only("cypress chaining", () => {
    cy.get("#inputEmail1").parents("form").find("button").click();
    cy.get("#inputEmail1")
      .parents("form")
      .find("nb-radio")
      .first()
      .should("have.text", "Option 1");
  });
});
