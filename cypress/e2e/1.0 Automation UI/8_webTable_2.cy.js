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
// Looping
describe("ui component Automation ", () => {
  it("test for table", () => {
    const age = [20, 30, 40, 200];
    cy.wrap(age).each((value) => {
      cy.get('[placeholder="Age"]').clear().type(value);
      cy.wait(500);
      cy.get("tbody tr").each((item) => {
        if (value === 200) {
          cy.wrap(item).find("td").should("contain.text", "No data found");
        } else {
          cy.wrap(item).find("td").last().should("have.text", value);
        }
      });
    });
  });
});
