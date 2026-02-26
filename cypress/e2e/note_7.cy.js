/// <reference types="cypress" />
//test hooks in cypress
beforeEach("open web applications", () => {
  cy.visit("/");
  cy.contains("Forms").click();
  cy.contains("Form Layouts").click();
});
describe("group 1", () => {
  it.only("Reusing Locators in Cypress: ", () => {
    // this will not work not a good practice to asign variable in cypress
    const email1 = cy.get("#inputEmail1");
    email1.parents("form").find("button").click();
    // (1) Alias ie second name:
    cy.get("#inputEmail1").as("darrehanrasool");
    cy.get("@darrehanrasool").parents("form").find("button").click();
    // (2) via using then() method:
    cy.get("#inputEmail1").then((rehan) => {
      cy.wrap(rehan.parents("form").find("button").click());
      // we can reuse it again
      cy.wrap(rehan.parents("form").find("button").click());
      //we can wrap any object in order to call cypress methods
      cy.wrap("hello")
        .should("equal", "hello")
        .then((dar) => {
          return dar;
        });
      // second way to return values via aliasing
      cy.get(rehan).as("variable");
    });
    cy.get("@variable").click();
  });
});
