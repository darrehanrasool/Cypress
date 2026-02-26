/// <reference types="cypress" />
//test hooks in cypress
beforeEach("open web applications", () => {
  cy.visit("/");
  cy.contains("Forms").click();
  cy.contains("Form Layouts").click();
});
describe("test group 1", () => {
  it.only("first test 1", () => {
    //multi  level up  : use .parents()
    cy.get("#inputEmail1").parents("form").find("button");
    //single level up : use .parent()
    cy.contains("Using the Grid").parent("nb-card").find("button");
    //.parentsuntil(): return collection of elements
    cy.contains("Using the Grid").parentsUntil("nb-card-body").find("button");
  });
});
