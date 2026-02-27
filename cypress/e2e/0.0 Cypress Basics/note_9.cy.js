/// <reference types="cypress" />
// test hooks in cypress
beforeEach("open web application", () => {
  cy.visit("/");
  cy.contains("Forms").click();
  cy.contains("Form Layout").click();
});

describe("Assertion Ways and Retry", () => {
  it.only("first test 1", () => {
    // partial assertion
    cy.get('[for="exampleInputEmail1"]').should("contain", "Email address");
    // exact  assertion
    cy.get('[for="exampleInputEmail1"]').should("have.text", "Email address");
    // assertion
    cy.get('[for="exampleInputEmail1"]')
      .invoke("text")
      .then((value) => {
        expect(value).to.equal("Email address");
      });
    // assertion
    cy.get('[for="exampleInputEmail1"]')
      .invoke("text")
      .then((value) => {
        expect(value).to.contain("Email address");
      });
    //assertion
    cy.get('[for="exampleInputEmail1"]').then((value) => {
      expect(value).to.have.text("Email address");
    });
  });
});
