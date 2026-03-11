/// <reference types="cypress" />
// test hooks in cypress
beforeEach("open web application", () => {
  cy.visit("/");
  cy.contains("Forms").click();
  cy.contains("Form Layout").click();
});
describe("ui component Automation", () => {
  it.only("input feilds", () => {
    // Example
    cy.get("#inputEmail1")
      .type("darrehanrasool_first", { delay: 200 })
      .clear()
      .type("darrehanrasool_second", { delay: 200 })
      .clear();
    // Variable
    const data = "Hola";
    cy.contains("nb-card", "using the grid", {
      matchCase: false,
    })
      .contains("Email", { matchCase: false })
      .type(`${data}works`);
    // Positive Assertion
    cy.get("#inputEmail1")
      .should("have.value", `${data}works`)
      .clear()
      .type("assertion passed sucessfully !")
      .press(Cypress.Keyboard.Keys.TAB);
    // Negative Assertion
    cy.get("#inputEmail1")
      .should("not.have.value", ``)
      .clear()
      .type("assertion passed sucessfully !");
    cy.contains("Auth").click();
    cy.contains("Login").click();
    cy.get("#input-email").type("hola@gmail.com");
    cy.get("#input-password").type("khuftanfaqeer{enter}");
  });
});
