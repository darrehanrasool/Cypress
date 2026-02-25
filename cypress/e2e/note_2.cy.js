/// <reference types="cypress" />
beforeEach("open web application", () => {
  cy.visit("/");
});
it("first test ", () => {
  console.log("hola!");
});
