/// <reference types="cypress" />
// test hooks in cypress
beforeEach("open web application", () => {
  cy.visit("/");
  cy.contains("Forms").click();
  cy.contains("Form Layout").click();
});

describe("Assertion Ways and Retry", () => {
  it.only("first test 1", () => {
    // partial assertion eg
    cy.get('[for="exampleInputEmail1"]').should("contain", "Email address");
    // exact  assertion  eg
    cy.get('[for="exampleInputEmail1"]').should("have.text", "Email address");
    // assertion eg 1
    cy.get('[for="exampleInputEmail1"]')
      .invoke("text")
      .then((value) => {
        expect(value).to.equal("Email address");
      });
    // assertion eg 2
    cy.get('[for="exampleInputEmail1"]')
      .invoke("text")
      .then((value) => {
        expect(value).to.contain("Email address");
      });
    //assertion eg 3
    cy.get('[for="exampleInputEmail1"]').then((value) => {
      expect(value).to.have.text("Email address");
    });
  });
});
