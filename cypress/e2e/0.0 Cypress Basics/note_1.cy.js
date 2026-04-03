/// <reference types="cypress" />
// test hooks in cypress

beforeEach("open web application", () => {
  cy.visit("/");
  cy.contains("Forms").click();
  cy.contains("Form Layouts").click();
});

afterEach("clean up", () => {
  cy.log("Test finished");
  cy.clearCookies();
  cy.clearLocalStorage();
});

describe("test group 1 ", () => {
  it.only("darrehanrasool", () => {
    console.log("hola from kashmere");
  });
  it("darrehanrasool", () => {
    console.log("hola from kashmere");
  });
});
