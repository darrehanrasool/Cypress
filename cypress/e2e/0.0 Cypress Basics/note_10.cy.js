/// <reference types="cypress" />
// test hooks in cypress
// defaultCommandTimeout is 4 sec ie 4000 mili seconds
beforeEach("open web application", () => {
  cy.visit("/");
  cy.contains("Modal & Overlays").click();
  cy.contains("Dialog").click();
});

afterEach("cleanup", () => {
  console.log("Test Finished");
  cy.clearCookies();
  cy.clearLocalStorage();
});

describe("Time outs Example", () => {
  it.only("first test 1", () => {
    cy.contains("Open with delay 10 seconds", { matchCase: false }).click();
    cy.get("nb-dialog-container nb-card nb-card-header", {
      timeout: 11000,
    }).should("have.text", "Friendly reminder");
  });
});
