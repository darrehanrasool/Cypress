/// <reference types="cypress" />
// test hooks in cypress
// cypress did't have hover() method
beforeEach("open web application", () => {
  cy.visit("/");
  cy.contains("Modal & Overlays").click();
  cy.contains("Tooltip").click();
});

afterEach("cleanup", () => {
  console.log("Test Finished");
  cy.clearCookies();
  cy.clearLocalStorage();
});

describe("ui component Automation", () => {
  it.only("Tool Tips", () => {
    cy.contains("button", "Top").trigger("mouseenter");
    cy.get("nb-tooltip").should("have.text", "This is a tooltip");
  });
});
