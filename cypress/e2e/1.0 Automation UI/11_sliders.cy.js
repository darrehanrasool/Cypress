/// <reference types="cypress" />
// test hooks in cypress
beforeEach("open web application", () => {
  cy.visit("/");
  cy.contains("IoT Dashboard").click();
});

afterEach("cleanup", () => {
  console.log("Test Finished");
  cy.clearCookies();
  cy.clearLocalStorage();
});

describe("ui component Automation", () => {
  it("sliders", () => {
    cy.get('[tabtitle="Temperature"] circle')
      .invoke("attr", "cx", "16.51396466692464")
      .invoke("attr", "cy", "96.27130144037599")
      .click();
    cy.get('[class="value temperature h1"]').should("contain.text", "16");
  });
});
