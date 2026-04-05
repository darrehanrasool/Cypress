// <reference types="cypress" />
// test hooks in cypress
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

describe("ui component Automation", () => {
  it("iframes", () => {
    cy.frameLoaded('[data-cy="esc-close-iframe"]');
    // option 1
    cy.iframe('[data-cy="esc-close-iframe"]')
      .contains("Open Dialog with esc close")
      .click();
    cy.contains("Dismiss Dialog").click();
    // option second
    cy.enter('[data-cy="esc-close-iframe"]').then((getBody) => {
      getBody().contains("Open Dialog with esc close").click();
      cy.contains("Dismiss Dialog").click();
      getBody().contains("Open Dialog without esc close").click();
      cy.contains("OK").click();
    });
  });
});
