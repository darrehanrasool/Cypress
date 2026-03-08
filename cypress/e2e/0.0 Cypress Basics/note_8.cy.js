/// <reference types="cypress" />
//test hooks in cypress
beforeEach("open web applications ", () => {
  cy.visit("/");
  cy.contains("Forms").click();
  cy.contains("Form Layout").click();
});
// via using JQuery method() and via using Invoke method()
// Invoke method() allows us to use  JQuery  methods()
describe("Extracting Values From DOM ", () => {
  it.only("first test 1", () => {
    // eg 1
    cy.get('[for="exampleInputEmail1"]').then((label) => {
      const data = label.text();
      console.log(data);
    });
    //eg 2
    cy.get('[for="exampleInputEmail1"]')
      .invoke("text")
      .then((value) => {
        console.log(value);
      });
    // eg 3
    cy.get('[for="exampleInputEmail1"]').invoke("text").as("variable_2");
    // assertion
    cy.get('[for="exampleInputEmail1"]').should("contain", "Email address");
    // eg 4
    cy.get('[id="exampleInputEmail1"]')
      .invoke("attr", "class")
      .then((classvalue) => {
        console.log(classvalue);
      });
    // assertion
    cy.get('[id="exampleInputEmail1"]').should(
      "have.attr",
      "class",
      "input-full-width size-medium status-basic shape-rectangle nb-transition",
    );
    // eg 5
    cy.get('[id="exampleInputEmail1"]').type("darrehanrasool");
    cy.get('[id="exampleInputEmail1"]')
      .invoke("prop", "value")
      .then((emailvalue) => {
        console.log(emailvalue);
      });
    // assertion
    cy.get('[id="exampleInputEmail1"]').type("darrehanrasool");
    cy.get('[id="exampleInputEmail1"]').should(
      "have.prop",
      "value",
      "darrehanrasool",
    );
  });
});
