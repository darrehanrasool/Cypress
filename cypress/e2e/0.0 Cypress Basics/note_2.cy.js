/// <reference types="cypress" />
// test hooks in cypress
beforeEach("open web application", () => {
  cy.visit("/");
  cy.contains("Forms").click();
  cy.contains("Form Layouts").click();
});
afterEach("clean up", () => {
  console.log("Test Finished");
  cy.clearCookies();
  cy.clearLocalStorage();
});
describe("test group 2", () => {
  it.only("darrehanrasool ", () => {
    //   via tag locater
    cy.get(`input`);
    //   via class locater
    cy.get(`.nb-transition`);
    //   via id locater
    cy.get(`#inputEmail1`);
    //   via attribute locater
    cy.get(`[type]`);
    //   via attribute locater exact match
    cy.get(`[type="email"]`);
    //   via attribute locater exact match
    cy.get(`[data-cy="inputEmail1"]`);
    //   via attribute locater exact match
    cy.get(
      `[class="input-full-width size-medium status-basic shape-rectangle nb-transition"]`,
    );
    //   via selectors locater no space single expresssion
    cy.get(`input#inputEmail1.nb-transition[type="email"]`);
  });
});
