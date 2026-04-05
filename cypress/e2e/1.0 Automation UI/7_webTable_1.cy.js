/// <reference types="cypress" />
// test hooks in cypress
beforeEach("open web application", () => {
  cy.visit("/");
  cy.contains("Tables & Data").click();
  cy.contains("Smart Table").click();
});
afterEach("cleanup", () => {
  console.log("Test Finished");
  cy.clearCookies();
  cy.clearLocalStorage();
});
describe("ui component Automation ", () => {
  it("test for table", () => {
    // example 1
    cy.get("tbody")
      .contains("tr", "Larry")
      .then((tablerow) => {
        cy.wrap(tablerow).find(".nb-edit").click();
        cy.wrap(tablerow).find('[placeholder="Age"]').clear().type("00");
        cy.wrap(tablerow).find(".nb-checkmark").click();
        cy.wrap(tablerow).find("td").last().should("have.text", "00");
      });
    // example 2
    cy.get(".nb-plus").click();
    cy.get("thead tr")
      .eq(2)
      .then((tablerow) => {
        cy.wrap(tablerow).find('[placeholder="First Name"]').type("Rehan");
        cy.wrap(tablerow).find('[placeholder="Last Name"]').type("Rasool");
        cy.wrap(tablerow)
          .find('[placeholder="Username"]')
          .type("darrehanrasool");
        cy.wrap(tablerow)
          .find('[placeholder="E-mail"]')
          .type("darrehanrasool@gmail.com");
        cy.wrap(tablerow).find('[placeholder="Age"]').type("100");
        cy.wrap(tablerow).find(".nb-checkmark").click();
      });
    // example 3
    cy.get("tbody tr")
      .first()
      .find("td")
      .then((tabledata) => {
        cy.wrap(tabledata).eq(2).should("have.text", "Rehan");
        cy.wrap(tabledata).eq(3).should("have.text", "Rasool");
        cy.wrap(tabledata).eq(4).should("have.text", "darrehanrasool");
        cy.wrap(tabledata)
          .eq(5)
          .should("have.text", "darrehanrasool@gmail.com");
        cy.wrap(tabledata).eq(6).should("have.text", "100");
      });
  });
});
