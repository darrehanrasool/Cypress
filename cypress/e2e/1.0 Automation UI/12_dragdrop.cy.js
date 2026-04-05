// <reference types="cypress" />
// test hooks in cypress
beforeEach("open web application", () => {
  cy.visit("/");
  cy.contains("Extra Components").click();
  cy.contains("Drag & Drop").click();
});

afterEach("cleanup", () => {
  console.log("Test Finished");
  cy.clearCookies();
  cy.clearLocalStorage();
});

describe("ui component Automation", () => {
  it("drag and drop", () => {
    cy.get("#todo-list div").first().trigger("dragstart");
    cy.get("#drop-list").trigger("drop");
  });
});
