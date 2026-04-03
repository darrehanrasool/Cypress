/// <reference types="cypress" />
// test hooks in cypress
// via using JQuery method() and via using Invoke method()
// Invoke method() allows us to use  JQuery  methods()
beforeEach("open web applications ", () => {
  cy.visit("/");
  cy.contains("Forms").click();
  cy.contains("Form Layout").click();
});

afterEach("cleanup", () => {
  console.log("Test Finished");
  cy.clearCookies();
  cy.clearLocalStorage();
});

describe("Extracting Values From DOM ", () => {
  it.only("first test 1", () => {
    // eg 1
    cy.get('[for="exampleInputEmail1"]').then((label) => {
      const data_1 = label.text();
      const data_2 = label.html();
      console.log(data_1);
      console.log(data_2);
    });
    //eg 2
    cy.get('[for="exampleInputEmail1"]')
      .invoke("text")
      .then((value) => {
        console.log(value);
      });
    //eg 3
    cy.get('[for="exampleInputEmail1"]')
      .invoke("html")
      .then((value) => {
        console.log(value);
      });
    // eg 4
    cy.get('[id="exampleInputEmail1"]')
      .invoke("attr", "class")
      .then((classvalue) => {
        console.log(classvalue);
      });
    // eg 5
    cy.get('[id="exampleInputEmail1"]').type("darrehanrasool");
    cy.get('[id="exampleInputEmail1"]')
      .invoke("prop", "value")
      .then((emailvalue) => {
        console.log(emailvalue);
      });
    // Assertions
    cy.get('[for="exampleInputEmail1"]').invoke("text").as("variable_2");
    cy.get('[for="exampleInputEmail1"]').should("contain", "Email address");
    cy.get('[id="exampleInputEmail1"]').should(
      "have.attr",
      "class",
      "input-full-width size-medium status-basic shape-rectangle nb-transition",
    );
    cy.get('[id="exampleInputEmail1"]').type("darrehanrasool");
    cy.get('[id="exampleInputEmail1"]').should(
      "have.prop",
      "value",
      "darrehanrasool",
    );
  });
});
